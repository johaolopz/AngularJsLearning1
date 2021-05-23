import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Aquí ponemos las rutas*/
const routes: Routes = [];

@NgModule({
  //añadimos dentro del forRoot: ,{useHash: true} para quitar el signo de gato que pone angular por defecto
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
