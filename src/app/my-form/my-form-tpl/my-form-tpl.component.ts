import {Component, OnInit} from '@angular/core';
import {HABITS_OPTIONS, User} from '../user';

@Component({
  selector: 'app-my-form-tpl',
  templateUrl: './my-form-tpl.component.html',
  styleUrls: ['./my-form-tpl.component.css']
})
export class MyFormTplComponent implements OnInit {

  user: any;
  habits_options = [];

  constructor() {
  }

  // ---------- 表单状态 --------

  unValid(name: any): boolean {
    return name.invalid && (name.dirty || name.touched);
  }

  hasError(name: any, errorCode: string): boolean {
    return name.errors && name.errors[errorCode];
  }

  //

  ngOnInit() {
    this.user = new User();
    // 采用对象格式，可读性较好，较检器参考 src/app/my-form/my-form-tpl/directive/habits.directive.ts
    this.user.habits = {pingpong: false, basketball: true, football: false};
    // 注：如果你采用 [false,true,false] 这样的格式，
    // 那么则需要采用 src/app/my-form/my-form-reactive/my-form-reactive.component.ts 中的 habitsSelectValidator 格式的校验器
    this.habits_options = HABITS_OPTIONS;
  }

  createUser(info: any) {
    console.log('表单值:', info);
  }
}
