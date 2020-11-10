import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GrupEvents } from 'src/models/events.model';

@Component({
  selector: 'app-modificar-event',
  templateUrl: './modificar-event.component.html',
  styleUrls: ['./modificar-event.component.css']
})
export class ModificarEventComponent implements OnInit {
  @Input('carta') carta: GrupEvents[];
  @Output() pasarDatos = new EventEmitter<GrupEvents>();
  constructor() { }

  ngOnInit(): void {

  }

  //
  cambiarDatos(nom, lloc, url, text, email) {
    for (let i = 0; i < this.carta.length; i++) {
      if (this.carta[i].nomEvent == nom) {
        this.carta[i].llocEvent = lloc;
        this.carta[i].imageURL = url;
        this.carta[i].texto = text;
        this.carta[i].correu == email;
        this.carta[i] = new GrupEvents(nom, lloc, url, text, email);
        this.pasarDatos.emit(this.carta[i]);
      }else {
        //El evento no existe
      }
    }
  }

}
