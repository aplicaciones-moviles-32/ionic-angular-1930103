import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  user = {
    "usuario": "@Jasso",
    "nombre": "Diego",
    "descripcion": "Tengo hambre",
    "publicaciones": 10,
    "seguidores": 30,
    "seguidos": 15,
    "foto": "assets/fotodeperfil.jpg"
  }

  edicion: boolean = false;

  comenzarEdicion(){
    this.edicion = !this.edicion;
  }

  @Input() cambios: string = "";
  guardar(){
    this.user.descripcion = this.cambios;
    this.edicion = !this.edicion;
    this.clear();
  }

  clear(){
    this.cambios = "";
  }
  publicaciones = [
    {
      id: "12313123",
      imagen: "assets/publicacion1.jpg",
    },
    {
      id: "837213871231",
      imagen: "assets/publicacion2.png",
    },
    {
      id: "2343243242",
      imagen: "assets/publicacion3.jpg",
    },
    {
      id: "464535345",
      imagen: "assets/publicacion4.jpg",
    }
    ];
}
