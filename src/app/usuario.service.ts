import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario(): Usuario{
    let usuario = new Usuario()
    usuario.nome = "PAULO"
    usuario.email = "paulosergiobp@gmail.com"

    return usuario

  }

  public listaUsuario():Usuario[]{
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
  }

}
