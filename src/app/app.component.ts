import { Component ,OnInit,Input} from '@angular/core';
import { SessionComponent} from './session/session.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pariksha-front-end';

  @Input()
  session: SessionComponent;

  constructor() { }
  // currentUser: any;

  // ngOnInit(): void {
  //   this.currentUser = localStorage.getItem('currentUser');
  // }
  ngOnInit(): void {
    this.session = new SessionComponent();
  }

  logout() {
    this.session.logout();
  }
}
