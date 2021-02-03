import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../service/student.service';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  paperId: any;
  message: string = '';

  constructor(private service: StudentService, private router: Router) { }

  paper: any = {
    paperName: '',
    paperSubject: '',
    duration: 0,
    questions: []
  }

  questions: any[] = [];

  ngOnInit(): void {

    this.paperId = sessionStorage.getItem('paperToBeDownloaded');
    this.service.fetchUnReviewedPaper(this.paperId).subscribe(
      (result) => {
        this.paper = result;
        this.paper.questions.forEach((ques) => {
          if (ques.questionType == 'MATCHTHEFOLLOWING') {
            this.questions = ques.question.split('~');
          }
        });
      }, error => {
        console.error();
        this.message = error.error['message'];
      });
  }

  downloadPdf() {
    const options = {
      filename: 'paper.pdf',
      margin: 20,
      image: { type: 'jpeg' },
      html2canvas: {},
      jsPDF: { orientation: 'portrait' },
    }
    const element: Element = document.getElementById("content");
    console.log(element);
    html2pdf().from(element).set(options).save();
  }

}
