import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../../dashboard.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-paper',
  templateUrl: './create-paper.component.html',
  styleUrls: ['./create-paper.component.css'],
})
export class CreatePaperComponent implements OnInit {

  constructor(private service: DashboardService, private router: Router) { }

  ngOnInit(): void {
  }

  alert: boolean = false;
  alertError: boolean = false;
  message : string = '';
  level  = ['EASY', 'MEDIUM', 'HARD'];

  createPaper = new FormGroup({
    paperSetterId: new FormControl(Number(sessionStorage.getItem('paperSetterId'))),
    reviewed: new FormControl(false),
    paperName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    paperSubject: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    paperPassword: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    duration: new FormControl(''),
    difficultyLevel : new FormControl(null),
    totalMarks: new FormControl(''),
    totalQuestions: new FormControl(''),
  });

  get paperName() {
    return this.createPaper.get('paperName');
  }

  get paperSubject() {
    return this.createPaper.get('paperSubject');
  }

  get paperPassword() {
    return this.createPaper.get('paperPassword');
  }

  get startDate() {
    return this.createPaper.get('startDate');
  }

  get endDate() {
    return this.createPaper.get('endDate');
  }

  get duration() {
    return this.createPaper.get('duration');
  }

  get totalMarks() {
    return this.createPaper.get('totalMarks');
  }

  get totalQuestions() {
    return this.createPaper.get('totalQuestions');
  }

  collectData() {
    console.log(this.createPaper.value);
    this.service.createPaper(this.createPaper.value).subscribe((result) => {
      console.log('result : ', result);
      sessionStorage.setItem('paperId', result['paperId']);
      sessionStorage.setItem('paperSubject', result['paperSubject']);
      this.message = 'Paper created Successfully';
      this.alert = true;
    },error =>{
      console.error();
      this.message=error.error['message'];
      this.alertError = true;
    });
    this.createPaper.reset();
  }

  closeAlert() {
    this.alert = false;
    this.alertError = false;
  }
}
