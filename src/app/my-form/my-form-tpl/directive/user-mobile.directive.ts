import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appUserMobile]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: UserMobileDirective, multi: true}
  ]
})

export class UserMobileDirective implements Validator {

  validate(c: AbstractControl): { [key: string]: any; } {
    let value: string = c.value || '';
    if (!value.startsWith('133')) {
      return {
        userMobile: {
          msg: '手机号必须是以 133 开头',
          actualValue: value
        }
      };
    }
    return null;
  }

}
