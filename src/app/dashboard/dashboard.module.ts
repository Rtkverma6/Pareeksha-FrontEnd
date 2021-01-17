import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishPaperComponent } from './publish-paper/publish-paper.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertQuestionComponent } from './insert-question/insert-question.component';
import { AddChoicesComponent } from './add-choices/add-choices.component';

@NgModule({
  declarations: [PublishPaperComponent, CreatePaperComponent, InsertQuestionComponent, AddChoicesComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    PublishPaperComponent,
    CreatePaperComponent,
    InsertQuestionComponent,
    AddChoicesComponent
  ]
})
export class DashboardModule { }
