import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng16RutModule, RutValidator } from 'projects/ng16-rut/src/public-api';
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
    Ng16RutModule
  ]
})
export class DemoModule { }
