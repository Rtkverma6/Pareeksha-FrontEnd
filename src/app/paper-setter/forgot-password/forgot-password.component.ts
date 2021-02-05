import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaperSetterService } from '../../service/paper-setter.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent{

  flag:boolean = false;

  constructor(private service: PaperSetterService, private router: Router) { }

  details = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    dob: new FormControl(''),
  });

  get password() {
    return this.details.get('password');
  }
  get email() {
    return this.details.get('email');
  }
  get dob() {
    return this.details.get('dob');
  }

  collectData() {
    console.log(this.details.value);
    this.service
      .forgotPassword(this.details.value)
      .subscribe((result) => {
        console.log('result', result);
      }, error => {
        if (error.error['message'] != undefined) {
          alert(error.error['message']);
          this.flag = true;          
        }
        else{
          alert("Registration Successfull");
          this.router.navigate(['paperSetter/login']);
        }
      });
      
    this.details.reset();
  }

}
