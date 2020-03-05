import { Resultado } from './../core/model/result';
import { GeneradorPersonasService } from "./../providers/generador-personas.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  mostrar = false;
  // Antes de estereotipar
  // mia: any[] = [];
  // tras la esterotipacion
   mia: Resultado;

  constructor(public gente: GeneradorPersonasService) {}

  load() {
    this.gente.load().then(d => {
      this.mia = d;
      this.mostrar = true;
    });
  }
}
