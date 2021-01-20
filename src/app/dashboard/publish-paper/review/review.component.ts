import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaperSetterService } from '../../../paper-setter.service'
import { IQuestionChoice } from 'src/model/IQuestionChoice';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  paperId: Number;
  marksObtained: number = 0;
  paperSetterId : any;
  constructor(private service: PaperSetterService, private router: Router) { }

  paper: any = {
    paperName: '',
    paperSubject: '',
    questions: []
  }

  questionAndChoice: IQuestionChoice = {
    questionId: 0,
    selectedChoiceId: 0
  };

  responses: IQuestionChoice[] = [{
    questionId: 0,
    selectedChoiceId: 0
  }];

  ngOnInit(): void {
    this.paperSetterId  = localStorage.getItem('paperSetter').valueOf();
  }

  fetchPaperDetails(){
    this.paperId = 1;
    this.service.fetchPaper(this.paperId).subscribe((result) => {
      console.log(result['paperName']);
      this.paper = result;
      console.log(this.paper.paperName);
      console.log(this.paper.questions[0].question);
      console.log(this.paper.questions[0].choices[0].correct);
    });
  }

  collectData() {
    console.log("In collectData data");
    this.service.paperReviewed(this.paperId).subscribe((result) => {
      console.log(result['paperName']);
      this.paper = result;
      console.log(this.paper.paperName);
      console.log(this.paper.questions[0].question);
      console.log(this.paper.questions[0].choices[0].correct);
    });
  }
}
