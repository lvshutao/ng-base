import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

// 手机号码
export function mobileValidator(mobile: FormControl): any {
  let value = (mobile.value || '') + ''; // 转为字符串
  let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = reg.test(value);
  return valid ? null : {mobile: {value: value}};
}

// 不要使用这个验证器，这里只是示例
export function mobileAsyncValidator(mobile: FormControl): any {
  let valid = Math.random() > 0.5;
  console.log('异步验证:', valid);
  return Observable.of(valid ? null : {mobileAsync: true}).delay(4000);
}

// 固话
export function phoneValidator(phone: FormControl): any {
  let value = (phone.value || '') + '';
  let reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
  let valid = reg.test(value);
  return valid ? null : {phone: {value: value}};
}

export function passwordCmpValidator(info: FormGroup): any {
  let password: FormControl = info.get('password') as FormControl;
  let passwordConfirm: FormControl = info.get('rePassword') as FormControl;
  if (password != null && passwordConfirm != null) {
    let valid = password.value === passwordConfirm.value;
    return valid ? null : {cmp: true};
  }
  return null;
}

