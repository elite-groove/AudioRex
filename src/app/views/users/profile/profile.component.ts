import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Track } from 'ngx-audio-player';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;

  panels = [
    {
      active: true,
      name: 'The best album',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];

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
