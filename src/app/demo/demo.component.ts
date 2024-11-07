import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RutValidator } from 'projects/ng16-rut/src/public-api';
import { User } from '../user';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  public user: User = new User('Leandro', '30972198');
  reactiveForm: FormGroup;

  constructor (fb:FormBuilder, rv:RutValidator) {
    this.reactiveForm = fb.group({
      rut: ['30972198', [Validators.required, rv]]
    });
  }

  public onSubmit(form: any) {
    console.info(form);
  }
}