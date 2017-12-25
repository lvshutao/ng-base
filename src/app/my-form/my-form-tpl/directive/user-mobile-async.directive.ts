import {Directive} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, Validator} from '@angular/forms';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Directive({
  selector: '[appUserMobileAsync]',
  providers: [
    // 异步验证器
    {provide: NG_ASYNC_VALIDATORS, useExisting: UserMobileAsyncDirective, multi: true}
  ]
})
// 代码来源 https://segmentfault.com/a/1190000010558300
export class UserMobileAsyncDirective implements Validator {

  validate(c: AbstractControl): { [key: string]: any; } {
    return c.valueChanges
      .debounceTime(300) // 去抖
      .distinctUntilChanged() // 抑制重复值
      // 1. 可以使用 flatMap 进行远程校验 .flatMap(value => value)
      // 2. 本地模拟判断
      .map((value: string) => {
        if (['13300000001', '13300000002'].includes(value)) {
          return {
            userMobile: {
              msg: '手机号为黑名',
              actualValue: value
            }
          };
        }
        return null;
      })
      .first();
  }

}
