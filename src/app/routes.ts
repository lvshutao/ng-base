import {Routes} from '@angular/router';
import {Code404Component} from './code404/code404.component';
import {AuxIndexComponent} from './my-route/aux-index/aux-index.component';
import {MyRxjsComponent} from './my-rxjs/my-rxjs.component';
import {IndexComponent} from './index/index.component';
// 路由配置
// 1. 特性模型的使用
// 2. 其它普通的路由模块，并不在这里设置
export const appRoutes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'}, 重定向路由: pathMatch: full|prefix
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: 'my-route', loadChildren: 'app/my-route/my-route.module#MyRouteModule'},
  {path: 'my-rxjs', component: MyRxjsComponent},
  // 辅助路由
  // {path: 'aux', component: AuxIndexComponent, outlet: 'index'},
  // 通配符必须放在最后面
  {path: '**', component: Code404Component}
];
