import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tema } from 'model/Tema';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://bloggeneration29.herokuapp.com/tema', this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://bloggeneration29.herokuapp.com/tema', tema, this.token)
  }
}
