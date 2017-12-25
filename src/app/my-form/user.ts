// 不建议使用对象，使用对象时 *ngFor 语法比较特殊
//  *ngFor="let key of habitsKeys(habits)"
// habitsKeys = Object.keys; // 因为 habits 使用的是数组，不能使用常规的 ngFor
// 参考 src/app/my-form/my-form-tpl/my-form-tpl.component.html
// src/app/my-form/my-form-tpl/my-form-tpl.component.ts
// export const HABITS = {pingpong: '乒乓球', basketball: '篮球', football: '足球'};

// 这种数据格式比较多
export const HABITS_OPTIONS = [
  {id: 1, name: 'pingpong', text: '乒乓球'},
  {id: 2, name: 'basketball', text: '篮球'},
  {id: 3, name: 'football', text: '足球'},
];

export class User {
  username = '';
  phone = '';
  email = '';
  password: string = '';
  rePassword: string = '';
  sex: string = 'man';
  habits: any = {}; // 对于模板驱动表单，使用 {}；对于 响应式表单，需要使用 []
  remember: boolean = false;
  order: string = 'asc';

  constructor() {}
}


