import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../student.service'
import { IQuestionChoice } from 'src/model/IQuestionChoice';
import { IAnswer } from 'src/model/IAnswer';
import { Time } from '@angular/common';

@Component({
  selector: 'app-fetch-paper',
  templateUrl: './fetch-paper.component.html',
  styleUrls: ['./fetch-paper.component.css']
})
export class FetchPaperComponent implements OnInit {
  paperId: Number;
  marksObtained: number = 0;
  someDate: Date;

  constructor(private service: StudentService, private router: Router) { }
  
  paper: any = {
    paperName: '',
    paperSubject: '',
    duration : 0,
    questions: []
  }

  questions :any[] = [];

  questionAndChoice: IQuestionChoice = {
    questionId: 0,
    selectedChoiceId: 0
  };

  ansQuestionAndChoice: IAnswer = {
    questionId: 0,
    selectedChoiceId: 0,
    point: 0
  }

  responses: IQuestionChoice[] = [{
    questionId: 0,
    selectedChoiceId: 0
  }];

  answers: IAnswer[] = [{
    questionId: 0,
    selectedChoiceId: 0,
    point: 0
  }];

  ngOnInit(): void {
    this.paperId = 3;
    this.service.fetchPaper(this.paperId).subscribe((result) => {
      console.log(result['paperName']);
      console.log(result['duration']);
      this.paper = result;
      this.paper.questions.forEach(ques => {
        if(ques.questionType == "MATCHTHEFOLLOWING"){
          this.questions = ques.question.split('~');
          console.log(this.questions[0]);
        }
      });
    });
    //Hard coded value of duration
    this.someDate = new Date(Date.now() + (1800) * 1000);
    console.log("72"+this.someDate);
  }
  myTriggerFunction() {
    console.log('triggered!');
    this.result();
  }

  filterQuestionsAndItsAnswers() {
    this.paper.questions.forEach(q => {
      q.choices.forEach(c => {
        var correctId = 0;
        if (c.correct == true) {
          correctId = c.choiceId;
          this.ansQuestionAndChoice = {
            questionId: q.questionId,
            selectedChoiceId: correctId,
            point: q.points
          }
          console.log(correctId, q.questionId);
          this.answers.push(this.ansQuestionAndChoice);
        }
      });
    });
  }

  calculateResult() {
    for (let index = 1; index < this.answers.length; index++) {
      let ans = this.answers[index];
      let res = this.responses[index];
      if (ans.questionId == res.questionId) {
        if (ans.selectedChoiceId == res.selectedChoiceId) {
          console.log(this.marksObtained);
          this.marksObtained += ans.point;
        }
      }
    }
  }

  onSelect(qId: any, cId: any) {
    console.log(qId, cId);
    this.questionAndChoice = {
      questionId: qId,
      selectedChoiceId: cId
    }
    this.responses.push(this.questionAndChoice);
  }

  result() {
    console.log("In result data");
    console.log(this.responses);
    this.filterQuestionsAndItsAnswers();
    this.calculateResult();
    console.log("Toatal Marks Obtained" + this.marksObtained);
  }
}
