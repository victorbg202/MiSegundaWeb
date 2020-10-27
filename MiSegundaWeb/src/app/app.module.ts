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

@NgModule({
  declarations: [
    AppComponent,
    IniciComponent,
    QuiSomComponent,
    HeaderComponent,
    CartasIniComponent,
    ToTopBtnComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
