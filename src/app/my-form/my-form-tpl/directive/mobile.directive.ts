import {Directive} from '@angular/core';
import {mobileValidator} from '../../validators';
import {NG_VALIDATORS} from '@angular/forms';

// 要在模板表单中使用验证器，需要提前将其包装成指令
@Directive({
  selector: '[appMobile]',
  providers: [
    {provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}
  ]
})
// 使用的是 useValue，因此不需要继承 Validator
export class MobileDirective {
}
