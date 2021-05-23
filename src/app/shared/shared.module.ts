import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//agregar esta linea para importar el HttpClientModule
import { HttpClientModule } from '@angular/common/http';
//agregamos para importar los componentes
import * as fromComponents from './components';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [...fromComponents.components],
  exports:
  [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
