import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pariksha-front-end';
  currentUser: any;

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('currentUser');
  }
}
