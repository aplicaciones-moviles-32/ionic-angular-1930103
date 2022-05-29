import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from "firebase/app";
import {provideDatabase, getDatabase} from '@angular/fire/database';
import { provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { CamaraService } from './camara.service';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [AppComponent,PublicacionesComponent,IniciarSesionComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, FormsModule, 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(()=>getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },CamaraService],
  bootstrap: [AppComponent],
})
export class AppModule {}
