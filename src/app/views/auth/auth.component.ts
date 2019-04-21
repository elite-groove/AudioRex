import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Animation} from '../../classes/animation';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    Animation.FadeEffect
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
