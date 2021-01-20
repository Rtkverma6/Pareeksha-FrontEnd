import { Component } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
})
export class SessionComponent {

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') == null ? false : true;
  }
  isLoggedOut(): boolean {
    return localStorage.getItem('currentUser') == null ? true : false;
  }

  setLoggedInUser(username: string, icon: string): void {
    localStorage.setItem('currentUser', username);
    localStorage.setItem('icon', icon);
  }
  logout() {
    localStorage.clear();
  }
}
