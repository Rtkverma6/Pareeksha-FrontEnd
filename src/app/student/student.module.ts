import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PaperLoginComponent } from './paper-login/paper-login.component';
import { FetchPaperComponent } from './fetch-paper/fetch-paper.component';



@NgModule({
  declarations: [LoginComponent, PaperLoginComponent, FetchPaperComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent, PaperLoginComponent, FetchPaperComponent]
})
export class StudentModule { }
