import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../paper-setter/login/login.component';
import { PaperLoginComponent } from '../student/paper-login/paper-login.component';
import { HomeComponent } from './home.component';
const routes: Routes = [
{
  path: 'paperSetter/login',
  component: LoginComponent,
},
{
  path: 'student/paperLogin',
  component:PaperLoginComponent
},
{
  path:'',
  component:HomeComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
