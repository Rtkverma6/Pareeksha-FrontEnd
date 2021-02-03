import { Component, OnInit } from '@angular/core';
import { PaperSetterService } from '../../../service/paper-setter.service'

@Component({
  selector: 'app-paper-result',
  templateUrl: './paper-result.component.html',
  styleUrls: ['./paper-result.component.css']
})
export class PaperResultComponent implements OnInit {

  papersResults : any[] = [];
  alertError: boolean = false;
  message : string = '';

  constructor(private service : PaperSetterService) { }

  ngOnInit(): void {
    
    this.service.fetchResults(Number(sessionStorage.getItem('resultsOfPaper').valueOf())).subscribe((result: any) => {
      if(result.length == 0 )
      {
        this.message="Nobody has attempted the paper yet";
        this.alertError =true;
      }
      
      this.papersResults = result;
    },error =>{
      error.console.error();
    });
  }

  closeAlert() {
    this.alertError = false;
  }
}
