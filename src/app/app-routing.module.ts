import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './error-handler/page-not-found.component';


const routes: Routes = [
  {
    path: 'paperSetter',
    loadChildren: () =>
      import('./paper-setter/paper-setter.module').then(
        (mod) => mod.PaperSetterModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then(
        (mod) => mod.StudentModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then(
        (mod) => mod.HomeModule
      ),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
