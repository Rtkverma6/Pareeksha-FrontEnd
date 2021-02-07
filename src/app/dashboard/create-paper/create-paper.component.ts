import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../../service/dashboard.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-paper',
  templateUrl: './create-paper.component.html',
  styleUrls: ['./create-paper.component.css'],
})
export class CreatePaperComponent {

  error: any = { isError: false, errorMessage: '' };
  flag: boolean = false;

  constructor(private service: DashboardService, private router: Router) { }

  message: string = '';
  level = ['EASY', 'MEDIUM', 'HARD'];

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
    startDate: new FormControl('', [
      Validators.required
    ]),
    endDate: new FormControl('', [
      Validators.required
    ]),
    duration: new FormControl('', [
      Validators.required
    ]),
    difficultyLevel: new FormControl(null, [
      Validators.required
    ]),
    totalMarks: new FormControl('', [
      Validators.required
    ]),
    totalQuestions: new FormControl('', [
      Validators.required
    ]),
  });

  compareDate() {
    console.log('In compareDate()');
    console.log(this.createPaper.controls['startDate'].value);
    console.log(this.createPaper.controls['endDate'].value);
    if ((this.createPaper.controls['startDate'].value > this.createPaper.controls['endDate'].value)) {
      console.log('wrong value');
      this.error = { isError: true, errorMessage: 'Start date should be less than End date' };
      this.flag = true;
    }
  }

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
  get difficultyLevel() {
    return this.createPaper.get('difficultyLevel');
  }

  collectData() {
    console.log(this.createPaper.value);
    this.compareDate();
    if (this.flag == false) {
      this.service.createPaper(this.createPaper.value).subscribe((result) => {
        console.log('result : ', result);
        sessionStorage.setItem('paperId', result['paperId']);
        sessionStorage.setItem('paperSubject', result['paperSubject']);
        sessionStorage.setItem('totalQuestions', result['totalQuestions'])
        alert('Paper created Successfully.\n Attention please Note down your Paper Id : ' + result['paperId'] + '\n Please Insert Questions now');
        this.router.navigate(['dashboard/question/insert']);
      }, (error) => {
        console.error();
        alert(error.error['message']);
      });
      this.createPaper.reset();
    }
    console.log("After if ");
    this.flag =false;
  }
}
