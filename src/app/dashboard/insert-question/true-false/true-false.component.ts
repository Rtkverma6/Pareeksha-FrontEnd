import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../../../dashboard.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IQuestion } from '../../../../model/IQuestion';
import { IChoice } from '../../../../model/IChoice';


@Component({
  selector: 'app-true-false',
  templateUrl: './true-false.component.html',
  styleUrls: ['./true-false.component.css']
})
export class TrueFalseComponent {

  paperSubject: string = sessionStorage.getItem('paperSubject');
  constructor(private service: DashboardService, private router: Router) { }

  questionObject: IQuestion = {
    paperId:0,
    question: '',
    points: 0,
    choices: [],
    questionType : "TRUEORFALSE"
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
  });

  get questions() {
    return this.insertQuestion.get('question');
  }
  get points() {
    return this.insertQuestion.get('points');
  }
  addChoices() {
    this.choiceObject = {
      choice: 'True',
      isCorrect: this.insertQuestion.value.isCorrect1
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: 'False',
      isCorrect: this.insertQuestion.value.isCorrect2
    };
    this.questionObject.choices.push(this.choiceObject);
  }

  collectData() {
    this.questionObject.paperId = sessionStorage.getItem('paperId').valueOf(),
    this.questionObject.question = this.insertQuestion.value.question;
    this.questionObject.points = this.insertQuestion.value.points;
    this.addChoices();
    this.service
      .addQuestion(this.questionObject)
      .subscribe((result) => {
        console.log('result', result);
      });
    this.insertQuestion.reset();

  }
}
