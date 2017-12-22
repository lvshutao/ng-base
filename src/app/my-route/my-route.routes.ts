import {Routes} from '@angular/router';
import {MyRouteIndexComponent} from './my-route-index/my-route-index.component';
import {MyRouteDetailComponent} from './my-route-detail/my-route-detail.component';
import {MyRouteQueryparamComponent} from './my-route-queryparam/my-route-queryparam.component';
import {MyRouteConstComponent} from './my-route-const/my-route-const.component';
import {MyRouteChildComponent} from './my-route-child/my-route-child.component';
import {MyRouteChild2Component} from './my-route-child2/my-route-child2.component';
import {AuxIndexComponent} from './aux-index/aux-index.component';

export const MyRouteRoutes: Routes = [
  // 注意: path 中不要以 '/' 开头
  {
    path: '', component: MyRouteIndexComponent, children: [
      // 4. 子路由: 路由 与 组件是分离的，你可以将组件嵌入到任何路由中去
      {path: 'child', component: MyRouteChildComponent},
      {path: 'child2', component: MyRouteChild2Component}
    ]
  },
  // 1. 在查询参数中传递参数
  {path: 'query', component: MyRouteQueryparamComponent},
  // 2. 在路由配置中传递参数
  {path: 'detail/:id/:name', component: MyRouteDetailComponent},
  // 3. 在路由配置中配置常量
  {path: 'const', component: MyRouteConstComponent, data: [{isProd: true, name: 'Gaga'}]},
  // 辅助路由
  {path: 'aux', component: AuxIndexComponent, outlet: 'index'}
];
