import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaperSetterService } from '../../paper-setter.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-question',
  templateUrl: './insert-question.component.html',
  styleUrls: ['./insert-question.component.css']
})
export class InsertQuestionComponent {
  paperSubject : string = localStorage.getItem('paperSubject');
}
