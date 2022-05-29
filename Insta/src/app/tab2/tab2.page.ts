import { Component, OnInit,Input } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { CamaraService } from '../camara.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { NgForm } from '@angular/forms';
import { Database,set,ref,update,getDatabase,onValue,remove } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

import { BatabaseService } from '../batabase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(public camara: CamaraService, private http: HttpClient,private db: BatabaseService) {}

  ubi: string = "";
  checar_foto: boolean = false;
  publicado: boolean = false;
  user: any = [];
  id: string = "";


  ngOnInit(): void {
    this.getUbi();
    this.db.getUser().subscribe(res => {
      this.user = res;
    })
}
  getUbi = async () => {                           
    try{
      const coordinates = await Geolocation.getCurrentPosition();

      let latitud =  parseFloat(coordinates.coords.latitude.toString());
      let longitud =  parseFloat(coordinates.coords.longitude.toString());
  
      this.ubi = "(" + latitud.toString() + "," + longitud.toString() + ")";
    }catch (error){
      this.ubi = "N/D";
    }
    console.log(this.ubi);
    }

    fotografiar(){
      console.log(this.ubi);
      this.publicado = true;
      this.camara.tomar_foto();
      defineCustomElements(window);
      this.checar_foto=true;
      console.log("hola");
  }
  onSubmit(Agregarpublicacion: NgForm) {
    this.publicado = false;
    const db = getDatabase();
    this.id = this.makeid(8); 
    console.log("hola");

    set(ref(db, '/usuario/publicaciones/'+this.id),{ 
      desc: this.descripcion,
      id: this.id,
      src: this.camara.fotografia[0].data,
      usuario: this.user.usuario
      
    });
    console.log(this.user.usuario);
    this.clear();
  }

  clear(): void{
    this.descripcion="";
    this.id = '';
    this.checar_foto = false;
  
  }
  @Input() descripcion: string ="";

   makeid(length: number) {                               
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getUser(): void {
    this.http.get('https://claseapps-97737-default-rtdb.firebaseio.com/usuario.json').subscribe(res => {
      console.log(res);
      this.user = res;
    });
  }
}
