import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaperSetterService } from '../../service/paper-setter.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  error: any = { isError: false, errorMessage: '' };
  flag: boolean = false;

  constructor(private service: PaperSetterService, private router: Router) { }

  registerUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    dob: new FormControl('', [Validators.required]),
  });

  compareDate() {
    console.log('In compareDate()');
    console.log(new Date(Date.now()));
    var date = new Date(Date.now());
    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString()
      .split("T")[0];

    console.log(dateString);
    if ((this.registerUser.controls['dob'].value > dateString)) {
      console.log('wrong value');
      this.error = { isError: true, errorMessage: 'Date of birth greater than current date' };
      this.flag = true;
    }
  }

  get name() {
    return this.registerUser.get('name');
  }
  get password() {
    return this.registerUser.get('password');
  }
  get email() {
    return this.registerUser.get('email');
  }
  get dob() {
    return this.registerUser.get('dob');
  }

  collectData() {
    console.log(this.registerUser.value);
    this.compareDate();
    console.log(this.registerUser.controls['dob'].value);
    if (this.flag == false) {
      this.service
        .registerPaperSetter(this.registerUser.value)
        .subscribe((result) => {
          console.log('result', result);
          alert("Registration Successfull");
          this.router.navigate(['paperSetter/login']);
        }, error => {
          alert(error.error['message']);
        });
      this.registerUser.reset();
    }
    this.flag =false;
  }

}
