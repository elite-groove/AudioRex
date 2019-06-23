import { Component } from '@angular/core';
import {Animation} from './classes/animation';
import {RouterOutlet} from '@angular/router';
import { ModelConfigService } from './services/model-config.service';

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
  public modelConf;

  constructor(private modelService: ModelConfigService) {
    this.modelService.modelConfig.subscribe(
      modelConf => {
        console.log(modelConf);
        this.modelConf = modelConf;
      }
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
