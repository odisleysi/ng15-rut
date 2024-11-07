Angular 16+ RUT
=============

Angular 16+ library with several components to handle [Chilean RUT](https://en.wikipedia.org/wiki/National_identification_number#Chile) validation, cleaning and formatting.

## Installation

```bash
yarn add ng16-rut
# or
npm install ng16-rut --save
```

## Usage

### Set-up:

The easiest way to use this library is to import Ng16Rut in your app's main module.

```typescript
import { NgModule } from '@angular/core';
import { Ng16Rut } from 'ng16-rut';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  ...
  imports: [
    BrowserModule,
    Ng16Rut
  ],
})
class DemoAppModule { }
```

See `./demo` folder for a fully working example.

### Using it:

ng16-rut exposes multiple features that can be used to perform input validation and formatting. Probably you want to use one of the following:

- `RutValidator`: Exposes the `validateRut` directive (to attach to models or inputs) and the RutValidator class to be used as `Validator` on reactive forms.
- `RutPipe`: Exposes the `RutPipe` pipe to format rut numbers on templates
- `RutDirective`: Exposes the `formatRut` directive to format RUT inputs.

#### RutValidator

##### Reactive forms

```typescript
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
export class DemoAppComponent {
  constructor (fb: FormBuilder, rutValidator: RutValidator) {
    this.reactiveForm = fb.group({
      rut: ['30972198', [Validators.required, rutValidator]]
    });
  }
}

```

##### Template Form
```html
<input [(ngModel)]="user.rut" name="rut" validateRut required>
```

#### RutPipe

```html
{{ user.rut }}
<!-- 30972198 -->
{{ user.rut | rut }}
<!-- 3.097.219-8 -->
```

#### formatRut (Directive)
```html
<input [(ngModel)]="user.rut" name="rut" formatRut required>
<!--
(on blur)
3.097.219-8

(on focus)
30972198
-->
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Credits

Thank you [contributors](https://github.com/odisleysi/ng16-rut/graphs/contributors)!

<img src="https://avatars.githubusercontent.com/u/18350564?v=4" alt="Odisleysi" width="250"/>

ng16-rut is maintained by [odisleysi](https://github.com/odisleysi).

## License

Angular 16+ RUT is © 2023 GDExpress, spa. It is free software and may be redistributed under the terms specified in the LICENSE file.
