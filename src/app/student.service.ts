import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
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

  addStudent(data: any) {
    console.log(
      'in service : ' + data.studentName + ':' + data.prn + ':' + data.paperId
    );
    return this.http.post(this.url + 'student/login', data, this.httpOptions);
  }
  getPaper(data: any) {
    console.log('in service :' + data.paperId + ':' + data.paperPassword);
    return this.http.post(this.url + 'paper/login', data, this.httpOptions);
  }
  fetchPaper(paperId: Number) {
    return this.http.get(this.url + 'paper/fetch/' + paperId, this.httpOptions);
  }
}
