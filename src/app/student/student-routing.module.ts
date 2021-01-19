import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FetchPaperComponent} from './fetch-paper/fetch-paper.component'
import {LoginComponent} from './login/login.component'
import {PaperLoginComponent} from './paper-login/paper-login.component'




const routes: Routes = [
  { path: 'fetchPaper', component: FetchPaperComponent },
  { path: 'login', component: LoginComponent },
  { path: 'paperLogin', component: PaperLoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
