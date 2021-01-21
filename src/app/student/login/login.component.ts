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
  mesg : string;
  ngOnInit(): void {
    console.log("On load"+localStorage.getItem('currentPaperId'));
}

  invalidLogin: boolean = false;

  loginSudent = new FormGroup({
    paperId: new FormControl(Number(localStorage.getItem('currentPaperId'))),
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
    this.loginData.paperId = localStorage.getItem('currentPaperId');
    console.log("Login data"+this.loginData)
    this.service.addStudent(this.loginSudent.value).subscribe((result) => {
      console.log('result : ', result);
      localStorage.setItem('studentName', result['studentName']);
      localStorage.setItem('studentId',result['studentId']);
      console.log("set student Id"+localStorage.getItem('studentId'));
      localStorage.setItem('prn', result['prn']);
    },
    (error) => {
      console.log(error);
      this.mesg = "Invalid login!!";
      this.invalidLogin = true;
    });
    this.invalidLogin = true;
    this.loginSudent.reset();
    this.router.navigate(['student/fetchPaper'])
  }

  closeAlert() {
    this.invalidLogin = false;
  }
}
