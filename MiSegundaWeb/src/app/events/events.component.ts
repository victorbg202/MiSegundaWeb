import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  opcionEventos: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  changeLogin(opcionEventos: string): void {
    this.opcionEventos = opcionEventos;
  }

}
