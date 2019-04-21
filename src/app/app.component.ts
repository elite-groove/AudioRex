import { Component } from '@angular/core';
import {Animation} from './classes/animation';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Animation.FadeEffect
  ]
})
export class AppComponent {
  title = 'AudioRex';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
