import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { CommonModule } from "@angular/common";
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService]
})
export class UsuarioComponent implements OnInit {

  public usr:Usuario
  public usuarios:Usuario[]

  constructor(private usuarioService:UsuarioService, 
    private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.usr = this.usuarioService.getUsuario()
    //this.usuarios = this.usuarioService.listaUsuario()
    this.listaUsuario()

  }
  
  public listaUsuario(){
    this.usuarioService.listaUsuario().subscribe(
      response => {
        this.usuarios = response
      },
      error => {
        alert(" Houve algum erro ao carregar a lista")
      }
      
    )    

  }

  public delete(id:string){
      this.confirmationService.confirm({
          message: 'Voce tem certeza que deseja excluir o Registro?',
          accept: () => {
            this.usuarioService.delete(id).subscribe(
              r => {
                this.listaUsuario()
              },
              error =>  {
                alert(' Houve algum problema no delete')
              }
              )
          }
      });
  }    
   

}
