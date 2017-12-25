import {Component, OnInit} from '@angular/core';
import {HABITS_OPTIONS, User} from '../user';

@Component({
  selector: 'app-my-form-tpl',
  templateUrl: './my-form-tpl.component.html',
  styleUrls: ['./my-form-tpl.component.css']
})
export class MyFormTplComponent implements OnInit {

  user: any;

  constructor() {
  }

  // ---------- 多选开始 ------------
  habits = [];

  // 检查是否选中
  hasCheckedHabit(name): boolean {
    return this.user.habits && this.user.habits[name];
  }

  // 更新选中
  updateCheckedHabit(name, event) {
    this.user.habits[name] = event.target.checked;
  }

  // ---------- 多选结束

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
    this.user.habits = {pingpong: false, basketball: true, football: false};
    this.habits = HABITS_OPTIONS;
  }

  createUser(info: any) {
    console.log('表单值:', info);
  }
}
