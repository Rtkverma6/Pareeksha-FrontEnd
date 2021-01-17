import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaperSetterService } from '../../paper-setter.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private service: PaperSetterService, private router: Router) {  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') != null)
      this.router.navigate(['/dashboard/create']);
  }

  jwtToken: any;
  invalidLogin: boolean = false;

  loginUser = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  collectData() {
    console.log(this.loginUser.value);
    this.service.loginPaperSetter(this.loginUser.value).subscribe(
      (result) => {
        if (result != null) {
          console.log(result);
          this.jwtToken = result;
          this.invalidLogin = false;
          localStorage.setItem('currentUser', this.jwtToken.jwt);
          this.router.navigate(['/dashboard/create']);
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
