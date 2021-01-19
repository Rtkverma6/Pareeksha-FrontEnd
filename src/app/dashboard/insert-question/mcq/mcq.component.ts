import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaperSetterService } from '../../../paper-setter.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { IQuestion } from 'src/model/IQuestion';
import { IChoice } from 'src/model/IChoice';
=======
import { IQuestion } from '../../../../model/IQuestion';
import { IChoice } from '../../../../model/IChoice';
>>>>>>> f16aeaa288b566a2444f0594885cc17b3fde7488

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css']
})
export class MCQComponent {
  paperSubject: string = localStorage.getItem('paperSubject');
<<<<<<< HEAD
  
  constructor(private service: PaperSetterService, private router: Router) { }

  questionObj: IQuestion = {
    paperId : 0,
    question: '',
    points: 0,
    choices : []
  };

  tempChoice: IChoice = {
    choice: '',
    isCorrect: false
  }

  insertQuestion = new FormGroup({
    question: new FormControl('', [Validators.required]),
    points: new FormControl('', [Validators.required]),
    choice1: new FormControl('', [Validators.required]),
    isCorrect1: new FormControl(false),
    choice2: new FormControl('', [Validators.required]),
    isCorrect2: new FormControl(false),
    choice3: new FormControl('', [Validators.required]),
    isCorrect3:new FormControl(false),
    choice4: new FormControl('', [Validators.required]),
    isCorrect4: new FormControl(false),
  });

  get questions() {
    return this.insertQuestion.get('question');
  }
  get points() {
    return this.insertQuestion.get('points');
  }

  get choice1() {
    return this.insertQuestion.get('choice1');
  }
  get choice2() {
    return this.insertQuestion.get('choice2');
  }
  get choice3() {
    return this.insertQuestion.get('choice3');
  }
  get choice4() {
    return this.insertQuestion.get('choice4');
  }
  
  addChoices(){
    
    console.log(this.questionObj.choices[2]);
  }

  collectData() {
    this.questionObj.question = this.insertQuestion.value.question;
    this.questionObj.paperId = localStorage.getItem('paperId').valueOf();
    this.questionObj.points = this.insertQuestion.value.points;
    this.tempChoice.choice = this.insertQuestion.value.choice1;
    this.tempChoice.isCorrect = this.insertQuestion.value.isCorrect1;
    this.questionObj.choices[0]=this.tempChoice;
    this.tempChoice.choice = this.insertQuestion.value.choice2;
    this.tempChoice.isCorrect = this.insertQuestion.value.isCorrect2;
    this.questionObj.choices[1]=this.tempChoice;
    this.tempChoice.choice = this.insertQuestion.value.choice3;
    this.tempChoice.isCorrect = this.insertQuestion.value.isCorrect3;
    this.questionObj.choices[2]=this.tempChoice;
    this.tempChoice.choice = this.insertQuestion.value.choice4;
    this.tempChoice.isCorrect = this.insertQuestion.value.isCorrect4;
    this.questionObj.choices[3]=this.tempChoice;
    console.log(JSON.stringify(this.questionObj));
    console.log("Calling service");
    // console.log(this.questionObj);
    // this.service
    //   .addQuestion(this.questionObj)
    //   .subscribe()
    console.log("After Return from service");
    this.insertQuestion.reset();
    
=======
  constructor(private service: PaperSetterService, private router: Router) { }

  questionObject: IQuestion = {
    paperId:0,
    question: '',
    points: 0,
    choices: []
  }

  choiceObject: IChoice = {
    choice: '',
    isCorrect: false
  }

  insertQuestion = new FormGroup({
    paperId: new FormControl(localStorage.getItem('paperId')),
    question: new FormControl('', [Validators.required]),
    points: new FormControl('', [Validators.required]),
    choice1: new FormControl('', [Validators.required]),
    isCorrect1: new FormControl(false),
    choice2: new FormControl('', [Validators.required]),
    isCorrect2: new FormControl(false),
    choice3: new FormControl('', [Validators.required]),
    isCorrect3:new FormControl(false),
    choice4: new FormControl('', [Validators.required]),
    isCorrect4: new FormControl(false),
  });

  get questions() {
    return this.insertQuestion.get('question');
  }
  get points() {
    return this.insertQuestion.get('points');
  }

  addChoices() {
    this.choiceObject = {
      choice: this.insertQuestion.value.choice1,
      isCorrect: this.insertQuestion.value.isCorrect1
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: this.insertQuestion.value.choice2,
      isCorrect: this.insertQuestion.value.isCorrect2
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: this.insertQuestion.value.choice3,
      isCorrect: this.insertQuestion.value.isCorrect3
    };
    this.questionObject.choices.push(this.choiceObject);

    this.choiceObject = {
      choice: this.insertQuestion.value.choice4,
      isCorrect: this.insertQuestion.value.isCorrect4
    };
    this.questionObject.choices.push(this.choiceObject);
  }

  collectData() {
    this.questionObject.question = this.insertQuestion.value.question;
    this.questionObject.points = this.insertQuestion.value.points;
    this.addChoices();
    // this.service
    //   .addQuestion(this.insertQuestion.value)
    //   .subscribe((result) => {
    //     console.log('result', result);
    //     localStorage.setItem('questionId', result['questionId']);
    //     this.router.navigate(['dashboard/question/choice']);
    //   });
    // this.insertQuestion.reset();
    console.log(this.insertQuestion.value);
    console.log("question : " + this.questionObject.question);
    console.log("POints :" + this.questionObject.points);

    console.log(
      'Choice 1 : ' + this.questionObject.choices[0].choice +':' +
        this.questionObject.choices[0].isCorrect
    );
    console.log(
      'Choice 2 : ' + this.questionObject.choices[1].choice +':' +
        this.questionObject.choices[1].isCorrect
    );
    console.log(
      'Choice 3 : ' + this.questionObject.choices[2].choice +':' +
        this.questionObject.choices[2].isCorrect
    );
    console.log(
      'Choice 4 : ' + this.questionObject.choices[3].choice +':' +
        this.questionObject.choices[3].isCorrect
    );


>>>>>>> f16aeaa288b566a2444f0594885cc17b3fde7488
  }
}
