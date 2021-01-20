import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaperSetterService } from '../../paper-setter.service'
import { IQuestionChoice } from 'src/model/IQuestionChoice';

@Component({
  selector: 'app-publish-paper',
  templateUrl: './publish-paper.component.html',
  styleUrls: ['./publish-paper.component.css']
})
export class PublishPaperComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
 
}
