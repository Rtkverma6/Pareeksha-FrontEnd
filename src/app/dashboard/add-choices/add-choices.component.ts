import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaperSetterService } from '../../paper-setter.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-choices',
  templateUrl: './add-choices.component.html',
  styleUrls: ['./add-choices.component.css'],
})
export class AddChoicesComponent {
  constructor(private service: PaperSetterService, private router: Router) {}

  addChoice = new FormGroup({
    questionId: new FormControl(localStorage.getItem('questionId')),
    choice: new FormControl('', [Validators.required]),
    isCorrect: new FormControl('', [Validators.required]),
  });

  get choice() {
    return this.addChoice.get('choice');
  }

  collectData() {
    console.log(this.addChoice.value);
    this.service.addChoices(this.addChoice.value).subscribe((result) => {
      console.log('result', result);
    });
    this.addChoice.reset();
    this.locationreload();
  }

  locationreload(){
    location.reload();
  }
}
