import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { getToken } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public _window: Window = window;
  public _authConfig = {
    isLoggedIn: false
  };
  public authConfig = new BehaviorSubject<any>(this._authConfig);

  constructor(private http: HttpClient, private router: Router) { 
    this.authConfig.subscribe(
      authConfig => {
        this._authConfig = authConfig;
      }
    );

    const token = this.getToken();
    if(token) {
      this.updateUserStatus(true);
    }
  }

  registerUser(user) {
    return this.http.post(environment.host + '/users', user);
  }

  saveToken(token) {
    this._window.localStorage['token'] = token;
    this.updateUserStatus(true);
  }

  logout() {
    this._window.localStorage.removeItem('token');
    this.updateUserStatus(false);
    this.router.navigate(['/home']);
  }

  updateUserStatus(status: boolean) {
    this._authConfig.isLoggedIn = status;
    this.authConfig.next(this._authConfig);
  }

  checkLoggedIn() {
    const isLoggedIn = this._window.localStorage['token'] ? !this.jwtHelper.isTokenExpired() : false;
    this.updateUserStatus(isLoggedIn);
    return isLoggedIn;
  }

  login(user) {
    user.strategy = 'local';
    return this.http.post(environment.host + '/authentication', user);
  }
}
