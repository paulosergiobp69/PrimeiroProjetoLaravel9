import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usr:Usuario
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usr = this.usuarioService.getUsuario()
  }

}
