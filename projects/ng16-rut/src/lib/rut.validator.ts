import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { rutValidate } from 'rut-helpers';

type ValidationErrors = {
  [key: string]: any;
};

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null
}

export function validateRutFactory(rutValidate: Function): ValidatorFn {
  return (c: AbstractControl): ValidatorFn => {
    return (rutValidate(c.value) ? null : { invalidRut: true } as ValidationErrors) as ValidatorFn;
  };
}

@Directive({
  selector: '[validateRut][ngModel],[validateRut][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
  ],
})
export class RutValidator {
  private validator: Function;

  constructor() {
    this.validator = validateRutFactory(rutValidate);
  }

  public validate(c: AbstractControl): ValidatorFn {
    return this.validator(c);
  }
}
