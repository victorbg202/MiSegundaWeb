import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "inici"},
  {path: "inici", component: IniciComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
