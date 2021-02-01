import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaperSetterService } from '../../paper-setter.service'

@Component({
  selector: 'app-publish-paper',
  templateUrl: './publish-paper.component.html',
  styleUrls: ['./publish-paper.component.css']
})
export class PublishPaperComponent implements OnInit {
  alertError: boolean = false;
  message : string = '';
  paperSetterId: any
  constructor(private service: PaperSetterService, private router: Router) { }

  paper: any[] = [];

  ngOnInit(): void {
    this.paperSetterId = sessionStorage.getItem('paperSetterId');
    this.service.getPapereToBeReviewed(this.paperSetterId).subscribe((result: any) => {
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

  review(paperId: any) {
    sessionStorage.setItem('pageToBeReviewed', paperId);
    this.router.navigate(['dashboard/publish/review']);
  }

  closeAlert() {
    this.alertError = false;
  }
}
