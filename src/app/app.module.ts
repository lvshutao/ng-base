import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {AsideComponent} from './layout/aside/aside.component';
import {ContentHeaderComponent} from './layout/content-header/content-header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {AsideRightComponent} from './layout/aside-right/aside-right.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Code404Component} from './code404/code404.component';
import {ProRouteModule} from './pro-route/pro-route.module';
import {MyFormModule} from './my-form/my-form.module';
import {PageInfoService} from './share/page-info.service';
import {MyPipeModule} from './my-pipe/my-pipe.module';
import { MyRxjsComponent } from './my-rxjs/my-rxjs.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ContentHeaderComponent,
    FooterComponent,
    AsideRightComponent,
    Code404Component,
    MyRxjsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    // 普通的路由模块
    ProRouteModule, MyFormModule, MyPipeModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      // 使用工厂，生成单例并在各个组件中共享，用来描述页面的标题的描述
      provide: PageInfoService, useFactory: () => {
        return new PageInfoService();
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
