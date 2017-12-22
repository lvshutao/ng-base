import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { AsideComponent } from './layout/aside/aside.component';
import { ContentHeaderComponent } from './layout/content-header/content-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AsideRightComponent } from './layout/aside-right/aside-right.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Code404Component } from './code404/code404.component';
import { ProRouteModule } from './pro-route/pro-route.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ContentHeaderComponent,
    FooterComponent,
    AsideRightComponent,
    Code404Component
  ],
  imports: [
    BrowserModule,
    // 普通的路由模块
    ProRouteModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
