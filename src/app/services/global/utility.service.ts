import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

  /**
   * Upload file to the server
   * 
   * @param data an object with uri property of a file
   * @param token Authorization token
   */
  cloudFileUpload(data, token) {
    return this.http.post(environment.host + '/storage', data, {headers: {
      Authorization: token
    }});
  }
}
