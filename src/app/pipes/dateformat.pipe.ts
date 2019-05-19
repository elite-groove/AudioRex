import { Pipe, PipeTransform } from '@angular/core';
import { UserDetails } from 'server/interfaces/pagination-response';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(users: Array<UserDetails>, args?: any): any {
    // console.log(users);
    if (!users) { return []; }
    const datedusers = users.map(
      post => {
        // console.log(post.createdAt);
        post.createdAt = new Date(post.createdAt).toLocaleString();
        return post;
      });

    return datedusers;
  }

}
