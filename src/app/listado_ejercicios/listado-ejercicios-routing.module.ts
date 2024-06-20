import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoEjerciciosPage } from './listado-ejercicios.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoEjerciciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoEjerciciosPageRoutingModule {}
