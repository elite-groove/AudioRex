import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public authConfig;
  public isLoggedIn;
  public isCollapsed = true;
  constructor(private authService: AuthenticationService) {
    this.authService.authConfig.subscribe(
      authConfig => {
        this.authConfig = authConfig;
        this.isLoggedIn = this.authConfig.isLoggedIn;
      }
    );
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
