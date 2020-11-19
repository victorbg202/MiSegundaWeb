import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { QuiSomComponent } from './qui-som/qui-som.component';
import { HeaderComponent } from './header/header.component';
import { CartasIniComponent } from './inici/cartas-ini/cartas-ini.component';
import { ToTopBtnComponent } from './to-top-btn/to-top-btn.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { LlistaMembresComponent } from './qui-som/llista-membres/llista-membres.component';
import { DadesMembresComponent } from './qui-som/dades-membres/dades-membres.component';
import { ElementMembreComponent } from './qui-som/element-membre/element-membre.component';
import { AltaEventComponent } from './events/alta-event/alta-event.component';
import { ModificarEventComponent } from './events/modificar-event/modificar-event.component';
import { Practica4Component } from './practica4/practica4.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    QuiSomComponent,
    HeaderComponent,
    CartasIniComponent,
    ToTopBtnComponent,
    FooterComponent,
    EventsComponent,
    LlistaMembresComponent,
    DadesMembresComponent,
    ElementMembreComponent,
    AltaEventComponent,
    ModificarEventComponent,
    Practica4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
