import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'model/User';
import { UserLogin } from 'model/UserLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://bloggeneration29.herokuapp.com/usuarios/logar',userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://bloggeneration29.herokuapp.com/usuarios/cadastrar', user)
  }
}
