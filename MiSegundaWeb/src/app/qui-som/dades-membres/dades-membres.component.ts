import { Component, Input, OnInit } from '@angular/core';
import { Membre } from 'src/models/membre';

@Component({
  selector: 'app-dades-membres',
  templateUrl: './dades-membres.component.html',
  styleUrls: ['./dades-membres.component.css']
})
export class DadesMembresComponent implements OnInit {

  @Input() membre: Membre;

  constructor() { }

  ngOnInit() {
    this.membre = new Membre();
    this.membre.nom = '';
    this.membre.cognoms = '';
    this.membre.imageURL = 'assets/info_membres.svg';
    this.membre.descripcio = '';
    this.membre.edat = 0;
  }

}
