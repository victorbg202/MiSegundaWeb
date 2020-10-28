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
import { CartaEventsComponent } from './events/carta-events/carta-events.component';

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
    CartaEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
