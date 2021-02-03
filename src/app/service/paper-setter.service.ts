import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaperSetterService {
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  jwt = sessionStorage.getItem('currentUser');

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

  getPapereToBeReviewed(paperId : Number){
    return this.http.get(this.url+'paper/details/'+paperId,this.httpOptions);
  }

  getPublishedPapers(paperSetterId : Number){
    return this.http.get(this.url+'paper/published-paper/'+paperSetterId,this.httpOptions);
  }

  updatePaperStatus(paperId : Number){
    console.log(this.httpOptions);
    return this.http.get(this.url+'paper/review/'+paperId,this.httpOptions);
  }

  fetchResults(paperId:Number){
    return this.http.get(this.url+'paper/fetch-results/'+paperId,this.httpOptions);
  }
}
