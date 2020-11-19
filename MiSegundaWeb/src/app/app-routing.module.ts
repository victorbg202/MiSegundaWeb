import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { QuiSomComponent } from './qui-som/qui-som.component';
import { EventsComponent } from './events/events.component';
import { Practica4Component } from './practica4/practica4.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "inici"},
  {path: "inici", component: IniciComponent},
  {path: "events", component: EventsComponent},
  {path: "quiSom", component: QuiSomComponent},
  {path: "pt4", component: Practica4Component},
  {path: "**" ,redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
