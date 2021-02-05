import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../service/student.service'
import { PaperSetterService } from "../../../service/paper-setter.service";
import { IQuestionChoice } from 'src/model/IQuestionChoice';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  alertError: boolean = false;
  message: string = '';
  paperId: any;
  marksObtained: number = 0;
  paperSetterId: any;

  paper: any = {
    paperName: '',
    paperSubject: '',
    questions: []
  }

  questions: any[] = [];

  questionAndChoice: IQuestionChoice = {
    questionId: 0,
    selectedChoiceId: 0
  };

  responses: IQuestionChoice[] = [{
    questionId: 0,
    selectedChoiceId: 0
  }];

  constructor(private service: StudentService, private router: Router, private paperSetterService: PaperSetterService) { }

  ngOnInit(): void {
    this.paperId = sessionStorage.getItem('pageToBeReviewed');
    this.paperSetterService.fetchUnReviewedPaper(this.paperId).subscribe((result) => {
      console.log(result['paperName']);
      this.paper = result;
      console.log(this.paper.paperName);
      console.log(this.paper.questions[0].question);
      console.log(this.paper.questions[0].choices[0].correct);

      this.paper.questions.forEach(ques => {
        if (ques.questionType == "MATCHTHEFOLLOWING") {
          this.questions = ques.question.split('~');
          console.log(this.questions[0]);
        }
      });
    }, error => {
      console.error();
      this.message = error.error['message'];
      this.alertError = true;
    });
  }

  collectData() {
    console.log("In collectData data");
    alert('Paper Reviewed');
    this.paperSetterService.updatePaperStatus(this.paperId).subscribe((result) => {
      console.log(result);
    });
    this.router.navigate(['dashboard/publish']).then(()=>{
      window.location.reload();
    });
  }

  closeAlert() {
    this.alertError = false;
  }
}
