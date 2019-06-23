import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;

  constructor(private usersService: UsersService, private router: ActivatedRoute) {
    const userId = this.router.snapshot.params.id;
    this.usersService.getUser(userId).subscribe(
      (resp) => {
        console.log(resp);
        this.profile = resp;
      }
    );
  }

  ngOnInit() {
  }

}
