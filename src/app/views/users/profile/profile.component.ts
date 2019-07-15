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
      _id: Math.round(Math.random() * 99999999999999),
      active: true,
      name: 'The best album',
      disabled: false
    },
    {
      _id: Math.round(Math.random() * 99999999999999),
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      _id: Math.round(Math.random() * 99999999999999),
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];
  userId: string;

  constructor(private usersService: UsersService, private router: ActivatedRoute) {
    this.userId = this.router.snapshot.params.id;
    this.usersService.getUser(this.userId).subscribe(
      (resp) => {
        console.log(resp);
        this.profile = resp;
      }
    );
  }

  ngOnInit() {
  }

}
