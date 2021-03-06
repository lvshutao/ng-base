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
import {MyRxjsComponent} from './my-rxjs/my-rxjs.component';
import {IndexComponent} from './index/index.component';
import {MyHttpModule} from './my-http/my-http.module';
import {WsService} from './my-http/ws-service';
import {MyAnimationModule} from './my-animation/my-animation.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    BrowserModule,BrowserAnimationsModule,
    // 普通的路由模块
    ProRouteModule, MyFormModule, MyPipeModule, MyHttpModule,
    MyAnimationModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    PageInfoService,
    // 在一个注入器的范围内，依赖都是单例的
    WsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
