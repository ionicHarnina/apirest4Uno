import { Resultado } from './../core/model/result';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GeneradorPersonasService {
  usuarios = 10;
  //Almacenamos el resultado del get
  data: any[];
  //la ruta en la peticion
  path = "https://randomuser.me/api/?results=" + this.usuarios;
  constructor(public http: HttpClient) {}

  load() {
    //hace la carga asincrona de los n usuarios
    return new Promise<Resultado>(resolve => {
      this.http.get<Resultado>(this.path).subscribe(d => {
        resolve(d);
      });
    });
  }
}
