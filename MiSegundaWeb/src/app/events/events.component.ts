import { Component, OnInit } from '@angular/core';
import { CartaEventsComponent } from './carta-events/carta-events.component';
import { GrupEvents } from 'src/models/events.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  opcionEventos: string = 'all';
  mostrarInfo: string = "";
  erDNI = '^[0-9]{8}[A-Za-z]{1}$';



  constructor() { }

  ngOnInit(): void {
  }

  changeLogin(opcionEventos: string): void {
    this.opcionEventos = opcionEventos;
  }

  enviarDatos(nombre: string, lloc: string, email: string, text: string){
    console.log(nombre, lloc);
    CartaEventsComponent.cartas.push(new GrupEvents(nombre,lloc ,'assets/ufo.svg', text,email));
  }
}
