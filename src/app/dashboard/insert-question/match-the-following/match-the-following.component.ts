import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaperSetterService } from 'src/app/paper-setter.service';
import { IChoice } from 'src/model/IChoice';
import { IQuestion } from '../../../../model/IQuestion';

@Component({
  selector: 'app-match-the-following',
  templateUrl: './match-the-following.component.html',
  styleUrls: ['./match-the-following.component.css'],
})
export class MatchTheFollowingComponent {
  constructor(private service: PaperSetterService, private router: Router) {}

  questionObject: IQuestion = {
    paperId: 0,
    question: '',
    points: 0,
    choices: [],
    questionType : "MATCHTHEFOLLOWING"
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
    this.questionObject.paperId = localStorage.getItem('paperId').valueOf(),
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
    });
    this.matchTheFollowing.reset();
  }
}