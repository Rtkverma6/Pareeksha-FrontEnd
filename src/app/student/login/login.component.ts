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
  alertError: boolean = false;
  message : string = '';
  ngOnInit(): void {
    console.log("On load"+sessionStorage.getItem('currentPaperId'));
}

  loginSudent = new FormGroup({
    paperId: new FormControl(Number(sessionStorage.getItem('currentPaperId'))),
    studentName: new FormControl('',
    [ Validators.required,
      Validators.maxLength(20)
    ]),
    prn: new FormControl('', [  Validators.required,
      Validators.maxLength(10),]),
  });

  loginData :any = {
    paperId : 0,
    studentName : this.loginSudent.value.studentName,
    prn : this.loginSudent.value.prn
  }

  get studentName() {
    return this.loginSudent.get('studentName');
  }

  get prn() {
    return this.loginSudent.get('prn');
  }


  collectData() {
    this.loginData.paperId = sessionStorage.getItem('currentPaperId');
    console.log("Login data"+this.loginData)
    this.service.addStudent(this.loginSudent.value).subscribe((result) => {
      console.log('result : ', result);
      sessionStorage.setItem('studentName', result['studentName']);
      sessionStorage.setItem('studentId',result['studentId']);
      console.log("set student Id"+sessionStorage.getItem('studentId'));
      sessionStorage.setItem('prn', result['prn']);
    },error =>{
      console.error();
      this.message=error.error['message'];
      this.alertError = true;
    });
    this.loginSudent.reset();
    this.router.navigate(['student/fetchPaper'])
  }

  closeAlert() {
    this.alertError = false;
  }
}
