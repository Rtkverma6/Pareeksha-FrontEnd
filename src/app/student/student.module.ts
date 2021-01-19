import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PaperLoginComponent } from './paper-login/paper-login.component';
import { FetchPaperComponent } from './fetch-paper/fetch-paper.component';
import { StudentRoutingModule } from './student-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent, PaperLoginComponent, FetchPaperComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule,
  ],
  exports:[
    LoginComponent, 
    PaperLoginComponent, 
    FetchPaperComponent
  ]
})
export class StudentModule { }