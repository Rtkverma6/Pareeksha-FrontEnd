import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { IQuestionChoice } from 'src/model/IQuestionChoice';
import { IAnswer } from 'src/model/IAnswer';
import { error } from 'protractor';

@Component({
  selector: 'app-fetch-paper',
  templateUrl: './fetch-paper.component.html',
  styleUrls: ['./fetch-paper.component.css'],
})
export class FetchPaperComponent implements OnInit {
  paperId: any;
  marksObtained: number = 0;
  someDate: Date = new Date(Date.now() + 100);
  alertError: boolean = false;
  message: string = '';
  ifSubmit: boolean = false;

  constructor(private service: StudentService, private router: Router) { }

  paper: any = {
    paperName: '',
    paperSubject: '',
    duration: 0,
    questions: []
  }
  repeate: boolean = false;
  questions: any[] = [];

  paperResult: any = {
    studentId: 0,
    marksObtained: 0,
    resp: [],
    submittedOn: new Date()
  };

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
    this.paperId = sessionStorage.getItem('currentPaperId');
    console.log("onLoad student Id" + sessionStorage.getItem('studentId'));
    this.service.fetchPaper(this.paperId).subscribe(
      (result) => {
        this.paper = result;
        this.paper.questions.forEach((ques) => {
          if (ques.questionType == 'MATCHTHEFOLLOWING') {
            this.questions = ques.question.split('~');
            console.log(this.questions[0]);
          }
        });
      }, error => {
        console.error();
        this.message = error.error['message'];
        this.alertError = true;
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
      this.message = "All questions must be answered....";
      this.alertError = true;
      this.answers.length = 0;
      return;
    } else {
      this.answers.forEach(ans => {
        this.responses.forEach(res => {
          if (ans.questionId == res.questionId) {
            if (ans.selectedChoiceId == res.selectedChoiceId) {
              console.log("In Calcualate fun *****************" + this.marksObtained);
              this.marksObtained += ans.point;
            }
            this.ifSubmit = true;
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

    if (this.ifSubmit == true) {
      console.log("In student Id" + sessionStorage.getItem('studentId'));
      this.paperResult.studentId = sessionStorage.getItem('studentId');
      this.paperResult.marksObtained = this.marksObtained;
      this.paperResult.resp = this.responses;
      this.paperResult.resp.array;

      console.log(this.paperResult.resp);
      sessionStorage.setItem('marksObtained', this.paperResult.marksObtained);
      console.log(" Submitting Toatal Marks Obtained" + this.marksObtained);

      //Calling service to store result
      this.service.storeResult(this.paperResult).subscribe(error => {
        console.error();
        this.alertError = true;
      });
      alert('Paper Submitted Successfully');
      this.router.navigate(['']);      
    }
  }
  closeAlert() {
    this.alertError = false;
  }
}
