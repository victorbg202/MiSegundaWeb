import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  @Input()

  //
  opcionEventos: string = 'all';
  mostrarInfo: string = "";
  erDNI = '^[0-9]{8}[A-Za-z]{1}$';
  constructor() { }

  ngOnInit(): void {

  }

  changeLogin(opcionEventos: string): void {
    this.opcionEventos = opcionEventos;
  }
}
