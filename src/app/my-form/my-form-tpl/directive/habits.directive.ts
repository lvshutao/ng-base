import {Directive} from '@angular/core';
import {FormControl, FormGroup, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appHabits]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: HabitsDirective, multi: true}
  ]
})
// 模板式表单验证器
// 使用的是 useValue，因此不需要继承 Validator
export class HabitsDirective implements Validator {

  validate(info: FormGroup): { [key: string]: any } {

    let valid = false;
    ['pingpong', 'basketball', 'football'].forEach(key => {
      let ctrl: FormControl = info.get(key) as FormControl;
      if (ctrl != null && ctrl.value) {
        valid = true;
        return;
      }
    });
    return valid ? null : {length: true};
  }
}
