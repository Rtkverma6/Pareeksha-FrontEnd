import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboardService } from '../../service/dashboard.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-question',
  templateUrl: './insert-question.component.html',
  styleUrls: ['./insert-question.component.css'],
})
export class InsertQuestionComponent {

  paperSubject: string = sessionStorage.getItem('paperSubject');
  totalQuestions: number = Number(sessionStorage.getItem('totalQuestions')); 
  questionType = ['MCQ', 'True/False', 'Match the following'];
  form: FormGroup;

  constructor(private service: DashboardService, private router: Router) {
    this.form = new FormGroup({
      type: new FormControl(null),
    });
  }

  insertQuestion = new FormGroup({
    paperId: new FormControl(localStorage.getItem('paperId')),
    question: new FormControl('', [Validators.required]),
    points: new FormControl('', [Validators.required]),
  });

  get type(): string {
    return this.form ? this.form.get('type').value : '';
  }  
}
