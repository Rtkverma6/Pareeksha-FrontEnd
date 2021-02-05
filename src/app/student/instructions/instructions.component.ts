import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  totalQuestions : any;
  duration :any;
  paperName : any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.paperName = sessionStorage.getItem('paperName');
    this.totalQuestions = sessionStorage.getItem('totalQuestions');
    this.duration = sessionStorage.getItem('duration');
  }

  begin(){
    this.router.navigate(['student/fetchPaper']);
  }

}
