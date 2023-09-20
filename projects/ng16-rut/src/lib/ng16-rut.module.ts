import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RutValidator } from './rut.validator';
import { RutValueAccessor } from './rut-value-accessor';
import { RutDirective } from './rut.directive';
import { RutPipe } from './rut.pipe';



@NgModule({
  declarations: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor
  ],
  imports: [
    FormsModule
  ],
  exports: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor,
  ],
  providers: [
    RutValidator,
  ]
})
export class Ng16RutModule { }
