import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing-module';
import { Lugar } from './lugar/lugar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    Lugar
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LugaresModule { }
