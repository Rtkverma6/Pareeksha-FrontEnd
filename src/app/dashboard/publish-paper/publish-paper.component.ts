import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaperSetterService } from '../../paper-setter.service'

@Component({
  selector: 'app-publish-paper',
  templateUrl: './publish-paper.component.html',
  styleUrls: ['./publish-paper.component.css']
})
export class PublishPaperComponent implements OnInit {
  paperSetterId : any
  constructor(private service:PaperSetterService,private router:Router) { }

  paper : any[] =[];

  ngOnInit(): void {
    //this.paperSetterId  = localStorage.getItem('paperSetter').valueOf();
    this.paperSetterId = 1;
    this.service.getPapereToBeReviewed(this.paperSetterId).subscribe( (result :any) =>{
      for (let index = 0; index < result.length; index++) {
        let element = result[index];
        this.paper.push(element);     
      }
    });
    console.log(this.paper);
  }

  review(paperId :any){
  localStorage.setItem('pageToBeReviewed',paperId);
   this.router.navigate(['dashboard/publish/review']);
  }
}
