import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RutValidator } from '../ng15-rut/rut.validator';
import { Ng15Rut } from '../ng15-rut/ng15-rut.module';
import { DemoRoutingModule } from './demo-routing.module';



@NgModule({
  declarations: [
    DemoComponent
  ],
  providers: [RutValidator],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    Ng15Rut
  ]
})
export class DemoModule { }
