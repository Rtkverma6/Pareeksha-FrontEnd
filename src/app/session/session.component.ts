import { Component } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent {

  isLoggedIn(): boolean {
    return sessionStorage.getItem('currentUser') == null ? false : true;
  }
  isLoggedOut(): boolean {
    return sessionStorage.getItem('currentUser') == null ? true : false;
  }

  setLoggedInUser(username: string, icon: string): void {
    sessionStorage.setItem('currentUser', username);
    sessionStorage.setItem('icon', icon);
  }
  logout() {
    sessionStorage.clear();
  }
}
