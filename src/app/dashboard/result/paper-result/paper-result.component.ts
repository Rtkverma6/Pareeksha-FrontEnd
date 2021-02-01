import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaperSetterService } from '../../../paper-setter.service'

@Component({
  selector: 'app-paper-result',
  templateUrl: './paper-result.component.html',
  styleUrls: ['./paper-result.component.css']
})
export class PaperResultComponent implements OnInit {

  papersResults : any[] = [];
  constructor(private service : PaperSetterService) { }

  ngOnInit(): void {
    
    this.service.fetchResults(Number(sessionStorage.getItem('resultsOfPaper').valueOf())).subscribe((result: any) => {
        this.papersResults = result;
    },error =>{
      error.console.error();
    });
  }

}
