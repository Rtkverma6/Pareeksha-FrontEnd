import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { PaperSetterModule } from './paper-setter/paper-setter.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentModule } from './student/student.module';
import { HomeModule } from "./home/home.module";
import { SessionComponent } from './session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DashboardModule,
    PaperSetterModule,
    HttpClientModule,
    ReactiveFormsModule,
    StudentModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
