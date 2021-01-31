import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaperSetterService } from '../../paper-setter.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  paperSetterId: any
  constructor(private service: PaperSetterService, private router: Router) { }

  paper: any[] = [];

  ngOnInit(): void {
    this.paperSetterId = sessionStorage.getItem('paperSetterId').valueOf();
    this.service.getPublishedPapers(this.paperSetterId).subscribe((result: any) => {
      for (let index = 0; index < result.length; index++) {
        let element = result[index];
        this.paper.push(element);
      }
    });
    console.log(this.paper);
  }

  fetchResult(paperId: any) {
    sessionStorage.setItem('resultsOfPaper', paperId);
    this.router.navigate(['dashboard/result/paper-result']);
  }

}
