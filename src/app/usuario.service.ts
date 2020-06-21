import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = environment.host + "usuario"

  constructor(private http:HttpClient) { }


public delete(id:string):Observable<any>{
  return this.http.delete(this.url + '/'+ id)
}

public salvar(usuario:Usuario):Observable<Usuario>{
 return this.http.post<Usuario>(this.url, usuario)
}

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "PAULO"
    usuario.email = "paulosergiobp@gmail.com"

    return usuario

  }

//  public listaUsuario():Usuario[]{
  public listaUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url)

/*
    return  [
      {
        nome: 'Paulo',
        email: 'paulo@gmail.com'
      },
      {
        nome: 'Sergio',
        email: 'sergio@gmail.com'
      },
      {
        nome: 'Miguel',
        email: 'miguel@gmail.com'
      }
    ]
    */
  }

}
