import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../student.service';
import { IQuestionChoice } from 'src/model/IQuestionChoice';
import { IAnswer } from 'src/model/IAnswer';

@Component({
  selector: 'app-fetch-paper',
  templateUrl: './fetch-paper.component.html',
  styleUrls: ['./fetch-paper.component.css'],
})
export class FetchPaperComponent implements OnInit {
  paperId: any;
  marksObtained: number = 0;
  someDate: Date = new Date(Date.now() + 10);
  mesg: string;
  invalidLogin: boolean = false;

  constructor(private service: StudentService, private router: Router) {}

  paper: any = {
    paperName: '',
    paperSubject: '',
    duration: 0,
    questions: []
  }
  repeate: boolean = false;
  questions: any[] = [];

  questionAndChoice: IQuestionChoice = {
    questionId: 0,
    selectedChoiceId: 0,
  };

  ansQuestionAndChoice: IAnswer = {
    questionId: 0,
    selectedChoiceId: 0,
    point: 0,
  };

  responses: IQuestionChoice[] = [
    {
      questionId: 0,
      selectedChoiceId: 0,
    },
  ];

  answers: IAnswer[] = [
    {
      questionId: 0,
      selectedChoiceId: 0,
      point: 0,
    },
  ];

  ngOnInit(): void {
    this.responses.length = 0;
    this.paperId = localStorage.getItem('currentPaperId');
    this.service.fetchPaper(this.paperId).subscribe(
      (result) => {
        this.paper = result;
        this.paper.questions.forEach((ques) => {
          if (ques.questionType == 'MATCHTHEFOLLOWING') {
            this.questions = ques.question.split('~');
            console.log(this.questions[0]);
          }
        });
      },
      (error) => {
        console.log(error);
        this.mesg = 'Failed to fetch paper';
        this.invalidLogin = true;
      },
      () => {
        this.someDate = new Date(Date.now() + this.paper.duration * 1000);
      }
    );
  }
  myTriggerFunction() {
    console.log('triggered!');
    this.result();
  }

  filterQuestionsAndItsAnswers() {
    this.answers.length = 0;
    this.paper.questions.forEach(q => {
      q.choices.forEach(c => {
        var correctId = 0;
        if (c.correct == true) {
          correctId = c.choiceId;
          this.ansQuestionAndChoice = {
            questionId: q.questionId,
            selectedChoiceId: correctId,
            point: q.points,
          };
          console.log(correctId, q.questionId);
          console.log(this.answers.length);
          this.answers.push(this.ansQuestionAndChoice);
        }
      });
    });
  }

  calculateResult() {
    if (this.answers.length != this.responses.length) {
      console.log('resubmitted response for' + "Length of resp " + this.responses.length + "ans length " + this.answers.length);
      this.mesg = "All questions must be answered....";
      this.invalidLogin = true;
      this.answers.length = 0;
      return;
    } else {

      this.answers.forEach(ans => {
        this.responses.forEach(res => {
          if (ans.questionId == res.questionId) {
            if (ans.selectedChoiceId == res.selectedChoiceId) {
              console.log(this.marksObtained);
              this.marksObtained += ans.point;
            }
          }
        });
      });
    }
  }

  onSelect(qId: any, cId: any) {
    console.log(qId, cId)
    this.responses.forEach((e, index) => {
      if (e.questionId == qId) {
        this.repeate = true;
        console.log(this.responses);
        console.log('resubmitted response for' + qId + "Length of resp " + this.responses.length + "ans length " + this.answers.length);
        this.responses.splice(index, 1);
        console.log(this.responses);
        console.log('deleted @ index' + index);
        console.log('resubmitted response for' + qId + "Length of resp " + this.responses.length + "ans length " + this.answers.length);
      }
    });
    if (this.repeate == false) {
      this.questionAndChoice = {
        questionId: qId,
        selectedChoiceId: cId
      }
      this.responses.push(this.questionAndChoice);
      console.log("lengh of res after push" + this.responses.length)
    }
    this.repeate = false;

  }

  result() {
    console.log('In result data');
    console.log(this.responses);
    this.filterQuestionsAndItsAnswers();
    this.calculateResult();

    console.log("Toatal Marks Obtained" + this.marksObtained);
  }
  closeAlert() {
    this.invalidLogin = false;
  }
}
