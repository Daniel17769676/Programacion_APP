import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoEjerciciosPageRoutingModule } from './listado-ejercicios-routing.module';

import { ListadoEjerciciosPage } from './listado-ejercicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoEjerciciosPageRoutingModule
  ],
  declarations: [ListadoEjerciciosPage]
})
export class ListadoEjerciciosPageModule {}
