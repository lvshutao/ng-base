import {RouterModule, Routes} from '@angular/router';
import {MyFormIndexComponent} from './my-form-index/my-form-index.component';
import {MyFormTplComponent} from './my-form-tpl/my-form-tpl.component';
import {MyFormReactiveComponent} from './my-form-reactive/my-form-reactive.component';
import {MyFormEditComponent} from './my-form-edit/my-form-edit.component';

const routes: Routes = [
  {
    path: 'my-form', component: MyFormIndexComponent, children: [
      {path: 'tpl', component: MyFormTplComponent},
      {path: 'reactive', component: MyFormReactiveComponent}
    ]
  },
  {
    path: 'teacher-detail/:id', component: MyFormEditComponent
  }
];

export const MyFormRouting = RouterModule.forChild(routes);
