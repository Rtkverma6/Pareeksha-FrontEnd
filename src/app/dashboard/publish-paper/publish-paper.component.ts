import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaperSetterService } from '../../service/paper-setter.service'

@Component({
  selector: 'app-publish-paper',
  templateUrl: './publish-paper.component.html',
  styleUrls: ['./publish-paper.component.css']
})
export class PublishPaperComponent implements OnInit {

  alertError: boolean = false;
  message : string = '';
  paperSetterId: any
  paper: any[] = [];

  constructor(private service: PaperSetterService, private router: Router) { }

  ngOnInit(): void {
    this.paperSetterId = sessionStorage.getItem('paperSetterId');
    this.service.getPapereToBeReviewed(this.paperSetterId).subscribe((result: any) => {
      if(result.length == 0 )
      {
        this.message="No papers to publish";
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

  review(paperId: any) {
    sessionStorage.setItem('pageToBeReviewed', paperId);
    this.router.navigate(['dashboard/publish/review']);
  }

  downloadPaper(paperId:any){
    this.service.downloadPaper(paperId).subscribe();
  }

  closeAlert() {
    this.alertError = false;
  }
}
