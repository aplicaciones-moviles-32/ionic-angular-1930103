import { Component, Input ,OnInit} from '@angular/core';
import { getDatabase, onValue, ref } from 'firebase/database';
import { BatabaseService } from '../batabase.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private http: HttpClient,private db: BatabaseService) {}

  ngOnInit(): void {
  this.db.getUser().subscribe(res => {
    this.user = res;
  })
  this.db.getpublisUser().subscribe(res =>{
    this.publicaciones = res;
    console.log(res);
    this.numpubli=this.publicaciones.length;
    console.log(this.numpubli);
  })
  }

  user : any = [];
  numpubli: any = 0;
  publicaciones: any = [];
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
}
