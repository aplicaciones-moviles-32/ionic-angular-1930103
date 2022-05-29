import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BatabaseService } from '../batabase.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {

  constructor(private http: HttpClient,private db: BatabaseService) { }

  ngOnInit(): void {
    this.db.getpublisUser().subscribe(res =>{
      this.publicaciones = res;
      console.log(res);
      this.numpubli=this.publicaciones.length;
      console.log(this.numpubli);
    })
  }
  numpubli: any = 0;
  publicaciones: any = [];

  estado: string = 'activo';

  togglepublis(activo: string):void {
    this.estado = activo;
  }
}
