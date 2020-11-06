import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-event',
  templateUrl: './modificar-event.component.html',
  styleUrls: ['./modificar-event.component.css']
})
export class ModificarEventComponent implements OnInit {
  @Input('carta') carta: any

  constructor() { }

  ngOnInit(): void {

  }

}
