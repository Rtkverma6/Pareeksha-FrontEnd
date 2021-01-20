import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaperSetterService {
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  jwt = localStorage.getItem('currentUser');

  headers_object: HttpHeaders = new HttpHeaders().set(
    'Authorization',
    'Bearer ' + this.jwt
  );

  httpOptions = {
    headers: this.headers_object,
  };

  registerPaperSetter(data: any) {
    return this.http.post(this.url + 'papersetter/signup', data);
  }

  loginPaperSetter(data: any) {
    console.log('in service : ' + data.userName);
    return this.http.post(this.url + 'papersetter/login', data);
  }
}
