import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyFormIndexComponent} from './my-form-index/my-form-index.component';
import {MyFormRouting} from './my-form.routing';
import {MyFormTplComponent} from './my-form-tpl/my-form-tpl.component';
import {MyFormReactiveComponent} from './my-form-reactive/my-form-reactive.component';
import {MyTeacherService} from './my-teacher.service';
import {MyFormRateComponent} from './my-form-rate/my-form-rate.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PhoneDirective} from './my-form-tpl/directive/phone.directive';
import {PasswordDirective} from './my-form-tpl/directive/password.directive';
import {MyFormEditComponent} from './my-form-edit/my-form-edit.component';
import {MobileDirective} from './my-form-tpl/directive/mobile.directive';
import {MobileAsyncDirective} from './my-form-tpl/directive/mobile-async.directive';
import {UserMobileDirective} from './my-form-tpl/directive/user-mobile.directive';
import {UserMobileAsyncDirective} from './my-form-tpl/directive/user-mobile-async.directive';

@NgModule({
  imports: [
    CommonModule,
    MyFormRouting,
    // 注意，使用 ReactiveFormsModule 时必须导入 FormsModule，否则错误
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [
    MyFormIndexComponent,
    MyFormEditComponent,
    MyFormTplComponent,
    MyFormReactiveComponent,
    MyFormRateComponent,
    // directive validator
    MobileDirective,
    MobileAsyncDirective,
    UserMobileDirective,
    UserMobileAsyncDirective,
    PasswordDirective,
    PhoneDirective
  ],
  providers: [
    MyTeacherService
  ]
})
export class MyFormModule {
}
