import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaperSetterService } from '../../paper-setter.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  alert: boolean = false;

  registerUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    dob: new FormControl(''),
  });

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

  constructor(private service: PaperSetterService) {}

  collectData() {
    console.log(this.registerUser.value);
    this.service
      .registerPaperSetter(this.registerUser.value)
      .subscribe((result) => {
        console.log('result', result);
      });
    this.alert = true;
    this.registerUser.reset();
  }

  closeAlert() {
    this.alert = false;
  }
}
