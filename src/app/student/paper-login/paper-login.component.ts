import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../service/student.service';

@Component({
  selector: 'app-paper-login',
  templateUrl: './paper-login.component.html',
  styleUrls: ['./paper-login.component.css']
})
export class PaperLoginComponent {

  res: any;
  alertError: boolean = false;
  message: string = '';

  constructor(private service: StudentService, private router: Router) { }

  loginUser = new FormGroup({
    paperId: new FormControl('', [Validators.required]),
    paperPassword: new FormControl('', [Validators.required]),
  });

  get paperId() {
    return this.loginUser.get('paperId');
  }

  get paperPassword() {
    return this.loginUser.get('paperPassword');
  }

  collectData() {
    console.log(this.loginUser.value);
    this.service.getPaper(this.loginUser.value).subscribe(
      (result) => {
        if (result != null) {
          console.log(result);
          this.res = result;
          sessionStorage.setItem('currentPaperId', result['paperId']);
          // sessionStorage.setItem('totalMarks', result['totalMarks']);
          // sessionStorage.setItem('totalQuestions', result['totalQuestions']);
          this.router.navigate(['/student/login']);
        }
      }, error => {
        console.error();
        this.message = error.error['message'];
        this.alertError = true;
      }
    );
    this.loginUser.reset();
  }
  closeAlert() {
    this.alertError = false;
  }
}
