import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getDatabase, ref, onValue, update } from 'firebase/database';
import { AlertController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss'],
})
export class IniciarSesionComponent implements OnInit {

  constructor(private router: Router, public alert: AlertController) { }

  ngOnInit () {
    const db = getDatabase();
    const auxuser = ref(db, 'usuario/');
    onValue(auxuser, (aux) => {
        this.user = aux.val();
        this.usr_pass = this.user.pass;
        this.usr_name = this.user.user;
        console.log(this.user);
    });
  }

  sesioniniciada: boolean = false;
  editando_pass: boolean = false;
  editando_name: boolean = false;
  editando_pfp: boolean = false;
  foto_check: boolean = false;
  settings: boolean = false;
  user: any = [];
  usr_pass : string = "";
  usr_name : string = "";
  

  @Input() inputuser: string = "";
  @Input() inputpass: string = "";

  onSubmit(form: NgForm){
    if(this.inputuser==this.usr_name &&this.inputpass==this.usr_pass){
        
        this.sesioniniciada = true;
        console.log(this.sesioniniciada);
    }else{
      this.presentAlert("Error","error");
    }
    this.inputpass = "";
    this.inputuser = "";
  }
  async presentAlert(subtitle: string , mensaje: string) {
    const alert = await this.alert.create({
      cssClass: 'alert',
      header: 'Error',
      subHeader: subtitle,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  close_button(){
    this.sesioniniciada = false;
    this.router.navigate(['iniciarsesion']);
  }
  irAtabs(){
    this.router.navigate(['tabs']);
  }
}
