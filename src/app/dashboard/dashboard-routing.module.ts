import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishPaperComponent } from './publish-paper/publish-paper.component';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { InsertQuestionComponent } from './insert-question/insert-question.component';
import { PapersetterDashboardComponent } from './papersetter-dashboard/papersetter-dashboard.component';
import { ReviewComponent } from './publish-paper/review/review.component';
import { ResultComponent } from "./result/result.component";
import { PaperResultComponent } from "./result/paper-result/paper-result.component";


const routes: Routes = [
  { path: 'publish', component: PublishPaperComponent },
  { path: 'create', component: CreatePaperComponent },
  { path: 'question/insert', component: InsertQuestionComponent },
  { path: 'papersetterDashboard', component: PapersetterDashboardComponent },
  { path: 'publish/review', component: ReviewComponent },
  { path: 'result', component: ResultComponent },
  { path: 'result/paper-result', component: PaperResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule { }
