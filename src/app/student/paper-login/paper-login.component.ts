import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-paper-login',
  templateUrl: './paper-login.component.html',
  styleUrls: ['./paper-login.component.css']
})
export class PaperLoginComponent implements OnInit {

  constructor(private service:StudentService , private router: Router) { }
  ngOnInit(): void {
   }

  res: any;
  invalidLogin: boolean = false;

  loginUser = new FormGroup({
    paperId: new FormControl('', [Validators.required]),
    paperPassword: new FormControl('', [Validators.required]),
  });

  collectData() {
    console.log(this.loginUser.value);
    this.service.getPaper(this.loginUser.value).subscribe(
      (result) => {
        if (result != null) {
          console.log(result);
          this.res = result;
          localStorage.setItem('currentPaperId',this.res.paperId);
          this.invalidLogin = false;
          this.router.navigate(['/student/login']);
        }
      },
      (error) => {
        console.log(error);
        this.res = "Invalid login!!";
        this.invalidLogin = true;
      }
    );
    this.loginUser.reset();
  }
  closeAlert() {
    this.invalidLogin = false;
  }
}
