import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaperSetterService } from '../../service/paper-setter.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  jwtToken: any;
  invalidLogin: boolean = false;

  loginUser = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private service: PaperSetterService, private router: Router) {  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') != null)
      this.router.navigate(['/dashboard/papersetterDashboard']);
  }

  collectData() {
    console.log(this.loginUser.value);
    this.service.loginPaperSetter(this.loginUser.value).subscribe(
      (result) => {
        if (result != null) {
          console.log(result);
          this.jwtToken = result;
          this.invalidLogin = false;
          sessionStorage.setItem('currentUser', this.jwtToken.jwt);
          this.router.navigate(['/dashboard/papersetterDashboard']);
        }
      },
      (error) => {
        this.jwtToken = 'Invalid Login, Please Retry !!!';
        this.invalidLogin = true;
      }
    );

    this.loginUser.reset();
  }

  closeAlert() {
    this.invalidLogin = false;
  }
}
