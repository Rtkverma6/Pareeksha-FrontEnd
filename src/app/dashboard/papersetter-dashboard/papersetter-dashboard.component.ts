import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-papersetter-dashboard',
  templateUrl: './papersetter-dashboard.component.html',
  styleUrls: ['./papersetter-dashboard.component.css']
})
export class PapersetterDashboardComponent implements OnInit {

  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.service.getPaperSetterId().subscribe(result => {
      console.log('Retrived papperSetter Id: ')
      console.log('result : ', result);
      console.log('Setting up paperSetter id in localstorage');
      sessionStorage.setItem('paperSetterId', result.toString());
      console.log(sessionStorage.getItem('paperSetterId'));
    })
  }

}
