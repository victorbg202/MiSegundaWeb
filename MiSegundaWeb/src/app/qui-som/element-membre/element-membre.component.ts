import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Membre } from 'src/models/membre';

@Component({
  selector: 'app-element-membre',
  templateUrl: './element-membre.component.html',
  styleUrls: ['./element-membre.component.css']
})

export class ElementMembreComponent implements OnInit {

  @Input() membre: Membre;
  @Output() selectEvent = new EventEmitter<Membre>();

  constructor() { }

  ngOnInit() {
  }

  membreSelected() {
    this.selectEvent.emit(this.membre);
  }

}
