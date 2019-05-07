import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private _window: Window) { }

  registerUser(user) {
    return this.http.post(environment.host + '/users', user);
  }

  saveToken(token) {
    this._window.localStorage['token'] = token;
  }

  loginUser() {
    
  }
}
