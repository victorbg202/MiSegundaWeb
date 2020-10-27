import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { QuiSomComponent } from './qui-som/qui-som.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "inici"},
  {path: "inici", component: IniciComponent},
 /* {path: "events", component: IniciComponent},*/
  {path: "quiSom", component: QuiSomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
