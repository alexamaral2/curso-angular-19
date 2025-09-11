import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lugar } from './lugar/lugar';

const routes: Routes = [
  {
    path: '',
    component: Lugar
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugaresRoutingModule { }
