import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../../dashboard.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-question',
  templateUrl: './insert-question.component.html',
  styleUrls: ['./insert-question.component.css'],
})
export class InsertQuestionComponent {

  paperSubject: string = localStorage.getItem('paperSubject');
  questionType = ['MCQ', 'True/False', 'Match the following'];
  form: FormGroup;

  constructor(private service: DashboardService, private router: Router) {
    this.form = new FormGroup({
      type: new FormControl(null),
    });
  }

  get type(): string {
    return this.form ? this.form.get('type').value : '';
  }

  insertQuestion = new FormGroup({
    paperId: new FormControl(localStorage.getItem('paperId')),
    question: new FormControl('', [Validators.required]),
    points: new FormControl('', [Validators.required]),
  });

  get question() {
    return this.insertQuestion.get('question');
  }
  get points() {
    return this.insertQuestion.get('points');
  }

  collectData() {
    console.log(this.insertQuestion.value);
    this.service.addQuestion(this.insertQuestion.value).subscribe((result) => {
      console.log('result', result);
      sessionStorage.setItem('questionId', result['questionId']);
      this.router.navigate(['dashboard/question/choice']);
    });
    this.insertQuestion.reset();
  }
}
