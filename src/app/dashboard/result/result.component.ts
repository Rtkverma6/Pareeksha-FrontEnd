import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaperSetterService } from '../../service/paper-setter.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
 
  paperSetterId: any
  alertError: boolean = false;
  message : string = '';
  paper: any[] = [];
 
  constructor(private service: PaperSetterService, private router: Router) { }

  ngOnInit(): void {
    this.paperSetterId = sessionStorage.getItem('paperSetterId').valueOf();
    this.service.getPublishedPapers(this.paperSetterId).subscribe((result: any) => {
      console.log(result.length);
      if(result.length == 0 )
      {
        this.message="Nobody has attempted the paper yet";
        this.alertError =true;
      }
      
      for (let index = 0; index < result.length; index++) {
        let element = result[index];
        this.paper.push(element);
      }
    },error =>{
      console.error();
      this.message=error.error['message'];
      this.alertError = true;
    });
    console.log(this.paper);
  }

  fetchResult(paperId: any) {
    sessionStorage.setItem('resultsOfPaper', paperId);
    this.router.navigate(['dashboard/result/paper-result']);
  }

  closeAlert() {
    this.alertError = false;
  }

}
