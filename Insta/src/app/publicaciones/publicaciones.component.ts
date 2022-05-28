import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

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
