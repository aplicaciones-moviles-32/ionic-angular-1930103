import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class BatabaseService {

  constructor(private http: HttpClient) { }

  getUser(): any {
    return this.http.get('https://claseapps-97737-default-rtdb.firebaseio.com/usuario.json')
  }

  getPublis(): any {
    return this.http.get('https://claseapps-97737-default-rtdb.firebaseio.com/publicaciones.json')
  }

  getpublisUser(): any {
    return this.http.get('https://claseapps-97737-default-rtdb.firebaseio.com/usuario/publicaciones.json')
  }
}
