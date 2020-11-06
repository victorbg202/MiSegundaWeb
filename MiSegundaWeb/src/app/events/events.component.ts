import { Component, OnInit} from '@angular/core';
import { GrupEvents } from 'src/models/events.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  cartas: GrupEvents[] = [];
  cartaActual: GrupEvents = null;
  //
  opcionEventos: string = 'all';
  mostrarInfo: string = "";
  erDNI = '^[0-9]{8}[A-Za-z]{1}$';
  prob;

  constructor() { }

  ngOnInit(): void {
    this.cartas.push(new GrupEvents('Event 1','Almenar' ,'assets/ufo.svg', 'Libero nam quae ipsa tempore perferendis recusandae, possimus accusantium placeat ullam labore expediores','hola@hola.com'));
    this.cartas.push(new GrupEvents('Event 2','Alfarras' ,'assets/quiSom.svg', 'Libero nam quae ipsa tempore perferendis recusandae, possimus accusantium placeat ullame dolor asperiores, ','hola@hola.com'));
    this.cartas.push(new GrupEvents('Event 3','Alguaire' ,'assets/ufo.svg', 'Libero nam quae ipsa tempore perferendis recusandae, possimus accusantium placeat ullam laolor asperiores','hola@hola.com'));
  }

  changeLogin(opcionEventos: string): void {
    this.opcionEventos = opcionEventos;
  }

  borrarEvent(eventBorrar) {
    //
    for (let i = 0; i < this.cartas.length; i++) {
      if (eventBorrar != "" && eventBorrar == this.cartas[i].nomEvent) {
         this.cartas.splice(i, 1);
      }
    }
  }
}
