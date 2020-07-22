import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './usuarios/lista.component';
import { UsuarioComponent } from './usuarios/usuario.component';

const routes: Routes = [
  {path: 'home', component: ListaComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
