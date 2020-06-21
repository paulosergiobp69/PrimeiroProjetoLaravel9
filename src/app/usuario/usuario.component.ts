import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usr:Usuario
  public usuarios:Usuario[]

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usr = this.usuarioService.getUsuario()
    this.usuarios = this.usuarioService.listaUsuario()
  }

}
