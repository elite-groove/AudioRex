import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from 'src/app/interfaces/token';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UtilityService } from '../utility.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  _window: Window = window;
  _authConfig = {
    isLoggedIn: false
  }
  authConfig = new BehaviorSubject<any>(this._authConfig);

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private utility: UtilityService) { 
    this.authConfig.subscribe(
      authConfig => {
        this._authConfig = authConfig;
      }
    );
    
    // iniitalize user logged in state
    this.checkLoggedIn();
  }

  saveToken(token: Token) {
    this._window.localStorage['token'] = token.accessToken;
    this.updateLoggedInStatus(true);
  }

  saveUserId(user) {
    this._window.localStorage['uid'] = user._id;
  }

  getUserId() {
    return this._window.localStorage['uid'];
  }

  googleLogin() {
    return this._window.location.href = (environment.host + '/auth/google/callback');
  }

  localLogin(data) {
    data.strategy = 'local';
    return this.http.post(environment.host + '/authentication', data);
  }

  localRegister(user) {
    console.log(user);
    return this.http.post(environment.host + '/users', user);
  }

  checkLoggedIn() {
    const isLoggedIn = this._window.localStorage['token'] ? !this.jwtHelper.isTokenExpired() : false;
    this.updateLoggedInStatus(isLoggedIn);
    return isLoggedIn;
  }

  updateLoggedInStatus(status: boolean) {
    this._authConfig.isLoggedIn = status;
    this.authConfig.next(this._authConfig);
  }

  logout() {
    this._window.localStorage.removeItem('token');
    this._window.localStorage.removeItem('uid');
    this.utility.createNotification('success', 'Session', 'You logged out.')
    this.updateLoggedInStatus(false);
  }
}
