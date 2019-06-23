import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelConfigService {
  private _modelConfig = {
    isLoading: false
  };
  public modelConfig = new BehaviorSubject<any>(this._modelConfig);
  subscriptions = new Subscription();

  constructor() {
    this.subscriptions.add(
      this.modelConfig.subscribe(
        (modelConf) => {
          this._modelConfig = modelConf;
        }
      )
    );
  }

  setLoading(status: boolean) {
    this._modelConfig.isLoading = status;
    this.modelConfig.next(this._modelConfig);
  }
}
