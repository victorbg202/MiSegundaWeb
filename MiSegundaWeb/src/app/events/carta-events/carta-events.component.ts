import { Component, OnInit, Input } from '@angular/core';
import { GrupEvents } from '../../../models/events.model';

@Component({
  selector: 'app-carta-events',
  templateUrl: './carta-events.component.html',
  styleUrls: ['./carta-events.component.css']
})

export class CartaEventsComponent implements OnInit {

  cartas: GrupEvents[] = [];
  cartaActual: GrupEvents = null;
  static cartas: any;

  constructor() { }

  ngOnInit(): void {
    this.cartas.push(new GrupEvents('Event 1','Almenar' ,'assets/ufo.svg', 'Libero nam quae ipsa tempore perferendis recusandae, possimus accusantium placeat ullam labore expedita qui nulla nihil iure ratione consequuntur. Dolor dolorum, repellat nostrum iusto quidem deserunt nulla laudantium ipsum. A Vero, molestias reiciendis? Quasi illo qui, cupiditate hic blanditiis voluptas voluptate voluptatem aliquam eaque dolor asperiores','hola@hola.com'));
    this.cartas.push(new GrupEvents('Event 2','Alfarras' ,'../../../assets/quiSom.svg', 'Libero nam quae ipsa tempore perferendis recusandae, possimus accusantium placeat ullam labore expedita qui nulla nihil iure ratione consequuntur. Dolor dolorum, repellat nostrum iusto quidem deserunt nulla laudantium ipsum.   Vero, molestias reiciendis? Quasi illo qui, cupiditate hic blanditiis voluptas voluptate voluptatem aliquam eaque dolor asperiores, ','hola@hola.com'));
    this.cartas.push(new GrupEvents('Event 3','Alguaire' ,'../../../assets/ufo.svg', 'Libero nam quae ipsa tempore perferendis recusandae, possimus accusantium placeat ullam labore expedita qui nulla nihil iure ratione consequuntur. Dolor dolorum, repellat nostrum iusto quidem deserunt nulla laudantium ipsum. A Vero, molestias reiciendis? Quasi illo qui, cupiditate hic blanditiis voluptas voluptate voluptatem aliquam eaque dolor asperiores','hola@hola.com'));
    //this.cartas.push(new GrupEvents(1,2,3,4,5));
  }

}
