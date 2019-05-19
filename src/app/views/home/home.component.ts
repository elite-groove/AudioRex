import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { PaginationResponse } from 'server/interfaces/pagination-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public users;

  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe(
      (pagination: PaginationResponse) => {
        console.log(pagination);
        this.users = pagination.data;
      }
    );
  }

  ngOnInit() {
  }
}
