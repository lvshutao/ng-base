import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProRouteComponent } from './pro-route.component';
import { ProRouteRouting } from './pro-route.routing';
import { ProResolveComponent } from './pro-resolve/pro-resolve.component';
import { ProCanActivateComponent } from './pro-can-activate/pro-can-activate.component';
import { ProCanDeactivateComponent } from './pro-can-deactivate/pro-can-deactivate.component';
import { CanActivateGuard } from './guard/can-activate.guard';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { ResolveGuard } from './guard/resolve.guard';

@NgModule({
  imports: [
    CommonModule,
    ProRouteRouting
  ],
  exports: [],
  declarations: [ProRouteComponent,
    ProResolveComponent,
    ProCanActivateComponent,
    ProCanDeactivateComponent
  ],
  providers: [
    CanActivateGuard,
    CanDeactivateGuard,
    ResolveGuard
  ]
})
export class ProRouteModule { }