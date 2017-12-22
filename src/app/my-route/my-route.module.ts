import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MyRouteRoutes} from './my-route.routes';

import {MyRouteIndexComponent} from './my-route-index/my-route-index.component';
import {MyRouteDetailComponent} from './my-route-detail/my-route-detail.component';
import {MyRouteQueryparamComponent} from './my-route-queryparam/my-route-queryparam.component';
import {MyRouteConstComponent} from './my-route-const/my-route-const.component';
import {MyRouteChildComponent} from './my-route-child/my-route-child.component';
import {MyRouteChild2Component} from './my-route-child2/my-route-child2.component';
import {AuxIndexComponent} from './aux-index/aux-index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MyRouteRoutes)
  ],
  declarations: [
    MyRouteIndexComponent,
    MyRouteDetailComponent,
    MyRouteQueryparamComponent,
    MyRouteConstComponent,
    MyRouteChildComponent,
    MyRouteChild2Component,
    AuxIndexComponent
  ]
})
export class MyRouteModule {
}
