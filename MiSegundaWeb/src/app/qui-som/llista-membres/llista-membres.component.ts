import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Membre } from '../../../models/membre';

@Component({
  selector: 'app-llista-membres',
  templateUrl: './llista-membres.component.html',
  styleUrls: ['./llista-membres.component.css']
})
export class LlistaMembresComponent implements OnInit {


  membres = [new Membre(), new Membre(), new Membre(), new Membre(), new Membre()];
  @Output() informarEvent = new EventEmitter<Membre>();

  constructor() { }

  ngOnInit() {
    this.membres[0].nom = 'Victor';
    this.membres[0].cognoms = 'Barbé';
    this.membres[0].descripcio = 'Hola, esta es una descripcion de ejemplo :D';
    this.membres[0].edat = 21;
    this.membres[0].imageURL = 'assets/membre_1.svg';

    this.membres[1].nom = 'Pepe';
    this.membres[1].cognoms = 'Martinez';
    this.membres[1].descripcio = 'Hola, esta es una descripcion de ejemplo :D';
    this.membres[1].edat = 32;
    this.membres[1].imageURL = 'assets/membre_2.svg';

    this.membres[2].nom = 'Juan';
    this.membres[2].cognoms = 'Sanchez';
    this.membres[2].descripcio = 'Hola, esta es una descripcion de ejemplo :D';
    this.membres[2].edat = 41;
    this.membres[2].imageURL = 'assets/membre_3.svg';

    this.membres[3].nom = 'Manuel';
    this.membres[3].cognoms = 'Ramirez';
    this.membres[3].descripcio = 'Hola, esta es una descripcion de ejemplo :D';
    this.membres[3].edat = 26;
    this.membres[3].imageURL = 'assets/membre_4.svg';

    this.membres[4].nom = 'Quim';
    this.membres[4].cognoms = 'Martinez';
    this.membres[4].descripcio = 'Hola, esta es una descripcion de ejemplo :D';
    this.membres[4].edat = 20;
    this.membres[4].imageURL = 'assets/membre_5.svg';
  }

  informarMembre(event) {
    this.informarEvent.emit(event);
  }

}
