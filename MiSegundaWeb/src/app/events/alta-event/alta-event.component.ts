import { Component, Input } from '@angular/core';
import { GrupEvents } from 'src/models/events.model';

@Component({
  selector: 'app-alta-event',
  templateUrl: './alta-event.component.html',
  styleUrls: ['./alta-event.component.css']
})
export class AltaEventComponent {

  @Input('carta') carta: any

  errLloc: string = "";
  errNom: string = "";
  errEmail = ['^[^@]+@[^@]+\.[a-zA-Z]{2,}$'];
  errText: string = "";
  mostrarInfo: string = "";
  errCheck?;

  enviarDatos(nom, lloc, url, text, email) {
    if(nom == ""){
      this.errNom = "Nom incorrecte introdueix un nom";
    }else {
      this.errNom = "Nom correct";
    }

    if(lloc == ""){
      this.errLloc = "Lloc incorrecte introdueix un lloc";
    }else {

      this.errLloc = "Lloc correct";
    }

    if(email.match(this.errEmail)){
      this.mostrarInfo = "Email correcto";
    }else{
      this.mostrarInfo = "Email incorrecto";
    }

    if(text.length < 2){
      this.errText = "El text es molt curt";
    }else {
      this.errText = "Text correcte";
    }

    if (this.errCheck = document.getElementById("Check")/*.checked*/ && nom != "" &&  lloc!="" && email.match(this.errEmail)  && text.length > 2) {
      this.errCheck = "";
      this.carta.push(new GrupEvents(nom, lloc, url , text, email));
    }else {
      this.errCheck = "Acepar condicions";
    }

  }

}
