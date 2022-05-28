import { Component, Input ,OnInit} from '@angular/core';
import { getDatabase, onValue, ref } from 'firebase/database';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.getUser();
   /*const db = getDatabase();
    const auxuser = ref(db, 'usuario/');
    console.log(auxuser)
    onValue(auxuser, (aux) => {
      this.user = aux.val();
      this.user = Object.values(this.user);
    });
    console.log(this.user);
    */
  }

  user : any = [];

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
    getUser(): void {
    this.http.get('https://claseapps-97737-default-rtdb.firebaseio.com/usuario.json').subscribe(res => {
      console.log(res);
      this.user = res;
    });
  }
}
