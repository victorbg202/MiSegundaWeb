import { Component } from '@angular/core';
import { Membre } from 'src/models/membre'

@Component({
  selector: 'app-qui-som',
  templateUrl: './qui-som.component.html',
  styleUrls: ['./qui-som.component.css']
})
export class QuiSomComponent {

  membreSeleccionado: Membre;

  cambiarMembreSeleccionado(membre) {
    this.membreSeleccionado = membre;
  }

}
