import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datestring'
})
export class DatestringPipe implements PipeTransform {

  transform(dateString: string, args?: any): any {
    return new Date(dateString).toLocaleString();
  }

}
