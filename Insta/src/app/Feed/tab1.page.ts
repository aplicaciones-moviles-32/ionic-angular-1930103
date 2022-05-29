import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

import { BatabaseService } from '../batabase.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private db: BatabaseService, private http: HttpClient ) {}
  
  publicaciones: any = [];
  user: any = [];

  ngOnInit(): void {
     this.mostrarPublis();
     this.db.getUser().subscribe(res => {
      this.user = res;
    })
  }

  mostrarPublis() {
    this.db.getPublis().subscribe(res =>{
      this.publicaciones = res;
    });
  } 
}

