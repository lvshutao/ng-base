import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, Validators} from '@angular/forms';
import {passwordCmpValidator} from '../../validators';

@Directive({
  selector: '[appPassword]',
  providers: [
    // {provide: NG_VALIDATORS, useValue: passwordCmpValidator, multi: true}
    {provide: NG_VALIDATORS, useExisting: PasswordDirective, multi: true}
  ]
})
// 模板式表单验证器
// 使用的是 useValue，因此不需要继承 Validator
export class PasswordDirective implements Validator {

  private valFn = Validators.nullValidator;

  constructor() {
    this.valFn = passwordCmpValidator;
  }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.valFn(control);
  }
}
