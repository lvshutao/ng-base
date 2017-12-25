import {Component, OnChanges, OnInit} from '@angular/core';
import {HABITS_OPTIONS, User} from '../user';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {mobileAsyncValidator, mobileValidator, passwordCmpValidator, phoneValidator} from '../validators';

@Component({
  selector: 'app-my-form-reactive',
  templateUrl: './my-form-reactive.component.html',
  styleUrls: ['./my-form-reactive.component.css']
})
export class MyFormReactiveComponent implements OnInit, OnChanges {

  user: any;
  habitsOptions: any;// 保存多选框的常量
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.user = new User();
    // 使用数组
    this.user.habits = this.habitsOptions = HABITS_OPTIONS;
    this.createUserForm(this.user);
  }

  // ------------- 多选选项 ---------------
  // 1. 首选要拼接出 [ true, false, true ] 这样的数组，用于创建 FormArray
  get habits(): FormArray {
    return this.userForm.get('habits') as FormArray;
  }

  buildHabits(habits: any[]) {
    let habitsArr = habits.map(habit => {
      // 这个 control 的值，只保存一个 boolean
      return this.fb.control(habit.selected);
    });
    return this.fb.array(habitsArr);
  }

  // -------------- 初始化 FormGroup ---------------

  createUserForm(user: User) {
    this.userForm = this.fb.group({
      // 普通文本
      username: [user.username, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15)]
      ],
      // 电话号码
      phone: [user.phone, [
        Validators.required,
        phoneValidator
      ]],
      // 手机号码
      mobile: ['', [
        Validators.required,
        mobileValidator,
      ], mobileAsyncValidator],
      // 电子邮箱
      email: [user.email, [
        Validators.required,
        Validators.email
      ]],
      // 密码与确认密码的较验
      passwordInfo: this.fb.group({
        password: [user.password, [
          Validators.required,
          Validators.minLength(6),
        ]],
        rePassword: [user.rePassword, [
          Validators.required
        ]]
      }, {validator: passwordCmpValidator}),
      // 单选
      sex: [user.sex, [
        Validators.required
      ]],
      // 多选
      habits: this.buildHabits(user.habits),
      // 必选
      remember: [user.remember, [ // 协议必须同意
        Validators.requiredTrue
      ]],
      // 下拉列表
      order: [user.order, [
        Validators.required
      ]],
      addresses: this.dataToFormArray([])
    });
  }


  // --------------- 表单验证状态检查 -------------
  // invalid 控件的值无效, dirty 控件的值变化了, touched 控件被访问过
  unValid(name: string): boolean {
    return this.userForm.get(name).invalid
      && (this.userForm.get(name).dirty || this.userForm.get(name).touched);
  }

  hasError(errorCode: string, name: any): boolean {
    return this.userForm.get(name).errors && this.userForm.get(name).errors[errorCode];
  }

  // ------------------ FormArray 的综合操作 ------------------
  // 将数组包装成 this.fb.array
  dataToFormArray(data: any[]) {
    const fgs = data.map(d => this.fb.group(d));
    return this.fb.array(fgs || []);
  }

  // ------------------ 动态 FormArray
  // 如果不写 get addresses()，那么你在 html 中就不可以使用 addresses.controls，
  // 而是应该使用 userForm.get('address').controls
  get addresses(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  // 增加一项
  addAddress() {
    this.addresses.push(this.fb.group(new Address()));
  }

  // 删除一项
  deleteAddress(index: number) {
    this.addresses.removeAt(index);
  }

  // ------------------ 动态 FormArray : 结束 ------------------

  // 重置表单
  reset() {
    this.userForm.reset();
    return;
    // 使用 setValue(捕获错误), patchValue, reset 来设置表单模型
    // this.userForm.setValue({
    //   username: 'origin.name'
    // });
    // this.userForm.patchValue({
    //   email: '525191782@qq.com'
    // });
  }

  createUser() {
    console.log('保存:', this.userForm.value);
  }

  ngOnChanges() {
    console.log('更换对象时，重置表单');
    this.userForm.reset();
  }

}

export class Address {
  street = '';
}
