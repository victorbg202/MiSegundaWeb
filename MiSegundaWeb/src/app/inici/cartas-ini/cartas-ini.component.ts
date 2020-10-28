import { Component, OnInit } from '@angular/core';
import { GrupCartaInici } from '../../../models/grupCartaInici.model';

@Component({
  selector: 'app-cartas-ini',
  templateUrl: './cartas-ini.component.html',
  styleUrls: ['./cartas-ini.component.css']
})
export class CartasIniComponent implements OnInit {

  cartas: GrupCartaInici[] = [];
  cartaActual: GrupCartaInici = null;

  constructor() { }

  ngOnInit(): void {
    this.cartas.push(new GrupCartaInici('Events', '../../../assets/ufo.svg', 'Aqui va una pequeña presentacion de los Eventos y otas cosas.','Events','../events'));
    this.cartas.push(new GrupCartaInici('Qui som?',  '../../../assets/quiSom.svg', 'Hola, aqui va una pequeña presentacion de lo que encontraras en Qui som?','Qui som?','../quiSom'));
  }

}
