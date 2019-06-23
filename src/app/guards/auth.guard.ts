import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { AuthConfig } from 'src/app/interfaces/auth-config';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  _window: Window = window;
  subscriptions = new Subscription();
  authConfig: AuthConfig;

  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private router: Router,
              private jwtHelper: JwtHelperService) { }

  canActivate(): boolean {
    this.subscriptions.add(this.authService.authConfig.subscribe(
      (authConfig: AuthConfig) => {
        this.authConfig = authConfig;
        if (this.authConfig.isLoggedIn ||  (localStorage['token'] && !this.jwtHelper.isTokenExpired())) {
          this.router.navigate(['/users']);
        }
      }
    ));

    return true;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
