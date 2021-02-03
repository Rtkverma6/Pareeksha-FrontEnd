import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/service/dashboard.service';
import { IChoice } from 'src/model/IChoice';
import { IQuestion } from '../../../../model/IQuestion';

@Component({
  selector: 'app-match-the-following',
  templateUrl: './match-the-following.component.html',
  styleUrls: ['./match-the-following.component.css'],
})
export class MatchTheFollowingComponent {

  paperSubject: string = sessionStorage.getItem('paperSubject');
  isCheck1:boolean = true;
  isCheck2:boolean = true;
  isCheck3:boolean = true;
  isCheck4:boolean = true;

  constructor(private service: DashboardService, private router: Router) { }

  questionObject: IQuestion = {
    paperId: 0,
    question: '',
    points: 0,
    choices: [],
    questionType: "MATCHTHEFOLLOWING"
  };

  choiceObject: IChoice = {
    choice: '',
    isCorrect: false,
  };

  questionReceived: string[] = [];

  matchTheFollowing = new FormGroup({

    points: new FormControl('', [Validators.required]),

    a: new FormControl('', [Validators.required]),
    b: new FormControl('', [Validators.required]),
    c: new FormControl('', [Validators.required]),
    d: new FormControl('', [Validators.required]),
    j: new FormControl('', [Validators.required]),
    k: new FormControl('', [Validators.required]),
    l: new FormControl('', [Validators.required]),
    m: new FormControl('', [Validators.required]),

    choice1: new FormControl('', [Validators.required]),
    isCorrect1: new FormControl(false),
    choice2: new FormControl('', [Validators.required]),
    isCorrect2: new FormControl(false),
    choice3: new FormControl('', [Validators.required]),
    isCorrect3: new FormControl(false),
    choice4: new FormControl('', [Validators.required]),
    isCorrect4: new FormControl(false),
  });

  get points() {
    return this.matchTheFollowing.get('points');
  }
  get choice1() {
    return this.matchTheFollowing.get('choice1');
  }
  get choice2() {
    return this.matchTheFollowing.get('choice2');
  }
  get choice3() {
    return this.matchTheFollowing.get('choice3');
  }
  get choice4() {
    return this.matchTheFollowing.get('choice4');
  }

  addChoices() {
    this.choiceObject = {
      choice: this.matchTheFollowing.value.choice1,
      isCorrect: this.matchTheFollowing.value.isCorrect1
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: this.matchTheFollowing.value.choice2,
      isCorrect: this.matchTheFollowing.value.isCorrect2
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: this.matchTheFollowing.value.choice3,
      isCorrect: this.matchTheFollowing.value.isCorrect3
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: this.matchTheFollowing.value.choice4,
      isCorrect: this.matchTheFollowing.value.isCorrect4
    };
    this.questionObject.choices.push(this.choiceObject);
  }

  collectData() {
    console.log(this.matchTheFollowing.value);
    this.questionObject.paperId = sessionStorage.getItem('paperId').valueOf(),
    this.questionReceived.push(this.matchTheFollowing.value.a);
    this.questionReceived.push(this.matchTheFollowing.value.b);
    this.questionReceived.push(this.matchTheFollowing.value.c);
    this.questionReceived.push(this.matchTheFollowing.value.d);
    this.questionReceived.push(this.matchTheFollowing.value.j);
    this.questionReceived.push(this.matchTheFollowing.value.k);
    this.questionReceived.push(this.matchTheFollowing.value.l);
    this.questionReceived.push(this.matchTheFollowing.value.m);

    this.questionObject.question = this.questionReceived.join('~');
    this.questionObject.points = this.matchTheFollowing.value.points;
    this.addChoices();

    this.service.addQuestion(this.questionObject).subscribe((result) => {
      console.log(result);
    }, error => {
      if(error.error['message'] == NaN){
        alert(error.error['message']);
      }

    });
    this.matchTheFollowing.reset();
    sessionStorage.setItem('totalQuestions', (Number(sessionStorage.getItem('totalQuestions')) - 1).toString());
    alert('Question Inserted');
    this.questionObject.choices = [];

    if (Number(sessionStorage.getItem('totalQuestions')) == 0) {
      console.log('in total Questions');
      alert('All questions inserted successfully');
      this.router.navigate(['dashboard/publish']);
    }
  }
  changeEvent1(event:any){
    if (event.target.checked) {
      this.isCheck1 = false;
    }
    else {
         this.isCheck1= true;
    }
  }
  changeEvent2(event:any){
    if (event.target.checked) {
      this.isCheck2 = false;
    }
    else {
         this.isCheck2= true;
    }
  }changeEvent3(event:any){
    if (event.target.checked) {
      this.isCheck3 = false;
    }
    else {
         this.isCheck3= true;
    }
  }changeEvent4(event:any){
    if (event.target.checked) {
      this.isCheck4 = false;
    }
    else {
         this.isCheck4= true;
    }
  }
}
