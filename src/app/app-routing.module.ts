import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'paperSetter',loadChildren:()=> import ('./paper-setter/paper-setter.module').then(mod => mod.PaperSetterModule )},
  {path:'dashboard',loadChildren:()=> import ('./dashboard/dashboard.module').then(mod => mod.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
