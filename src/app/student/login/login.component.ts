import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: StudentService, private router: Router) {  }

  ngOnInit(): void {
}

  invalidLogin: boolean = false;

  loginSudent = new FormGroup({
    paperId: new FormControl(Number(localStorage.getItem('paperId'))),
    studentName: new FormControl('',
    [ Validators.required,
      Validators.maxLength(20)
    ]),
    prn: new FormControl('', [  Validators.required,
      Validators.maxLength(10),]),
  });

  get studentName() {
    return this.loginSudent.get('studentName');
  }

  get prn() {
    return this.loginSudent.get('prn');
  }


  collectData() {
    console.log(this.loginSudent.value);
    this.service.addStudent(this.loginSudent.value).subscribe((result) => {
      console.log('result : ', result);
      localStorage.setItem('paperId', result['paperId']);
      localStorage.setItem('studentName', result['studentName']);
      localStorage.setItem('prn', result['prn']);
    });
    this.invalidLogin = true;
    this.loginSudent.reset();

  }

  closeAlert() {
    this.invalidLogin = false;
  }
}
