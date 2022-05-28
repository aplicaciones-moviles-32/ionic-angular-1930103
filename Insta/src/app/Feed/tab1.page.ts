import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  galletas = [
    {
    "usuario" : "@chokis",
    "src": "assets/chokis.jpg",
    "caption" : "4 pack"
    },
    {
    "usuario" : "@principe",
    "src": "assets/principe.png",
    "caption" : "Principe chocolate blanco"
    }
  ]

}
