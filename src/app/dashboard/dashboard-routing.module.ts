import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishPaperComponent } from './publish-paper/publish-paper.component';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { InsertQuestionComponent } from './insert-question/insert-question.component';
import { AddChoicesComponent } from './add-choices/add-choices.component';

const routes: Routes = [
  { path: 'publish', component: PublishPaperComponent },
  { path: 'create', component: CreatePaperComponent },
  { path: 'question/insert', component: InsertQuestionComponent },
  { path: 'question/choice', component: AddChoicesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashBoardRoutingModule {}
