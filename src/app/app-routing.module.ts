import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: 'home',
//    loadChildren:'./home/home.module#HomeModule'  --> angular: 7
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('src/app/usuario/usuario.module').then(m => m.UsuarioModule)

  },

  {
    path : '', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
