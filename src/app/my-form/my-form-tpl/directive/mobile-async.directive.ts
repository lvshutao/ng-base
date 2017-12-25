import {Directive} from '@angular/core';
import {mobileAsyncValidator} from '../../validators';
import {NG_ASYNC_VALIDATORS} from '@angular/forms';

// 参考文章: https://segmentfault.com/a/1190000010558300
@Directive({
  selector: '[appMobileAsync]',
  providers: [
    // 异步验证器
    {provide: NG_ASYNC_VALIDATORS, useValue: mobileAsyncValidator, multi: true}
  ]
})
export class MobileAsyncDirective {

  constructor() {
  }

}
