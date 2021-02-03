import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishPaperComponent } from './publish-paper/publish-paper.component';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertQuestionComponent } from './insert-question/insert-question.component';
import { MCQComponent } from './insert-question/mcq/mcq.component';
import { PapersetterDashboardComponent } from './papersetter-dashboard/papersetter-dashboard.component';
import { MatchTheFollowingComponent } from './insert-question/match-the-following/match-the-following.component';
import { TrueFalseComponent } from './insert-question/true-false/true-false.component';
import { ReviewComponent } from './publish-paper/review/review.component';
import { ResultComponent } from './result/result.component';
import { PaperResultComponent } from './result/paper-result/paper-result.component';

@NgModule({
  declarations: [PublishPaperComponent, MCQComponent, CreatePaperComponent, InsertQuestionComponent, PapersetterDashboardComponent, MatchTheFollowingComponent, TrueFalseComponent, ReviewComponent, ResultComponent, PaperResultComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    PublishPaperComponent,
    CreatePaperComponent,
    InsertQuestionComponent,
    MCQComponent
  ]
})
export class DashboardModule { }
