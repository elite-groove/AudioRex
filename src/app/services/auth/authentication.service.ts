import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  _window: Window = window;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  registerUser(user) {
    console.log('registering');
    return this.http.post(environment.host + '/users', user);
  }

  saveToken(token) {
    this._window.localStorage['token'] = token;
  }

  getToken() {
    return this._window.localStorage['token'];
  }

  /**
   * Authenticate Expired token.
   */
  isAuthenticated(): boolean {
    const token = this._window.localStorage['token'];
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  loginUser() {
    
  }
}
