import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyHttpRouting} from './my-http.routing';

// sudo npm install angular-in-memory-web-api --save-dev
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {MyHttpIndexComponent} from './my-http-index/my-http-index.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeroService} from './hero.service';
import {FormsModule} from '@angular/forms';
import {NoopInterceptor} from './noop-interceptor';

@NgModule({
  imports: [
    CommonModule,
    MyHttpRouting,
    HttpClientModule, // angular 4.3 and above
    // HttpClientInMemoryWebApiModule for angular 4.3 and above
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    FormsModule
  ],
  declarations: [
    MyHttpIndexComponent,
  ],
  providers: [
    HeroService,
    { // 自定义的处理 http 请求响应的服务
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true
    }
  ]
})
export class MyHttpModule {
}
