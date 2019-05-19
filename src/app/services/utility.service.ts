import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private notification: NzNotificationService) { }

  /**
   * 
   * @param {String} type success, info, warning, error
   * @param {String} title 
   * @param {String} content 
   */
  createNotification(type: string, title: string, content: string): void {
    this.notification.create(
      type,
      title,
      content
    );
  }
}
