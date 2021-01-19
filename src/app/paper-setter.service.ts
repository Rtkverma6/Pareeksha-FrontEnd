import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaperSetterService {
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  jwt = localStorage.getItem('currentUser');

  headers_object: HttpHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + this.jwt);

  httpOptions = {
    headers: this.headers_object,
  };

  getPaperSetterId() {
    this.jwt = localStorage.getItem('currentUser');
    this.headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.jwt.toString()
    );

    this.httpOptions = {
      headers: this.headers_object,
    };

    console.log('Header : ' + this.headers_object.get('Authorization'));
    return this.http.get(this.url + 'papersetter/id', this.httpOptions);
  }

  registerPaperSetter(data: any) {
    return this.http.post(this.url + 'papersetter/signup', data);
  }
  loginPaperSetter(data: any) {
    console.log('in service : ' + data.userName);
    return this.http.post(this.url + 'papersetter/login', data);
  }
  createPaper(data: any) {
    console.log('in service : ' + data);
    return this.http.post(this.url + 'paper/create', data, this.httpOptions);
  }
  addQuestion(data: any) {
    console.log('in service : ' + data.question + ':' + data.points);
    return this.http.post(this.url + 'question/create', data, this.httpOptions);
  }
  addChoices(data: any) {
    console.log('in service : ' + data.question + ':' + data.points);
    return this.http.post(this.url + 'choice/insert', data, this.httpOptions);
  }
  addStudent(data: any) {
    console.log('in service : ' + data.studentName + ':' + data.prn + ':' + data.paperId);
    return this.http.post(this.url + 'student/login', data, this.httpOptions);
  }
}
