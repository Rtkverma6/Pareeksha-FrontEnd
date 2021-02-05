import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../../../service/dashboard.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IQuestion } from '../../../../model/IQuestion';
import { IChoice } from '../../../../model/IChoice';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class MCQComponent {

  constructor(private service: DashboardService, private router: Router) { }

  isCheck1:boolean = true;
  isCheck2:boolean = true;
  isCheck3:boolean = true;
  isCheck4:boolean = true;
  
  questionObject: IQuestion = {
    paperId: 0,
    question: '',
    points: 0,
    choices: [],
    questionType: "MCQ"
  }

  choiceObject: IChoice = {
    choice: '',
    isCorrect: false
  }

  insertQuestion = new FormGroup({
    question: new FormControl('', [Validators.required]),
    points: new FormControl('', [Validators.required]),
    choice1: new FormControl('', [Validators.required]),
    isCorrect1: new FormControl(false),
    choice2: new FormControl('', [Validators.required]),
    isCorrect2: new FormControl(false),
    choice3: new FormControl('', [Validators.required]),
    isCorrect3: new FormControl(false),
    choice4: new FormControl('', [Validators.required]),
    isCorrect4: new FormControl(false),
  });

  get questions() {
    return this.insertQuestion.get('question');
  }
  get points() {
    return this.insertQuestion.get('points');
  }
  get choice1() {
    return this.insertQuestion.get('choice1');
  }
  get choice2() {
    return this.insertQuestion.get('choice2');
  }
  get choice3() {
    return this.insertQuestion.get('choice3');
  }
  get choice4() {
    return this.insertQuestion.get('choice4');
  }

  addChoices() {
    this.choiceObject = {
      choice: this.insertQuestion.value.choice1,
      isCorrect: this.insertQuestion.value.isCorrect1
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: this.insertQuestion.value.choice2,
      isCorrect: this.insertQuestion.value.isCorrect2
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: this.insertQuestion.value.choice3,
      isCorrect: this.insertQuestion.value.isCorrect3
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: this.insertQuestion.value.choice4,
      isCorrect: this.insertQuestion.value.isCorrect4
    };
    this.questionObject.choices.push(this.choiceObject);
  }

  collectData() {
    this.questionObject.paperId = sessionStorage.getItem('paperId').valueOf();
    this.questionObject.question = this.insertQuestion.value.question;
    this.questionObject.points = this.insertQuestion.value.points;
    this.addChoices();
    this.service
      .addQuestion(this.questionObject)
      .subscribe((result) => {
        console.log('result', result);
      }, error => {
        if(error.error['message'] == NaN){
          alert(error.error['message']);
        }
      }
      );
    this.insertQuestion.reset();
    
    sessionStorage.setItem('totalQuestions', (Number(sessionStorage.getItem('totalQuestions')) - 1).toString());
    alert('Question Inserted');
    this.questionObject.choices = [];

    if (Number(sessionStorage.getItem('totalQuestions')) == 0) {
      console.log('in total Questions');
      alert('All questions inserted successfully');
      this.router.navigate(['dashboard/publish']).then(()=>{
        window.location.reload();
      });;
    }else{
      this.router.navigate(['dashboard/question/insert']).then(()=>{
        window.location.reload();
      });;
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
