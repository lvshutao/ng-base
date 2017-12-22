import { Routes, RouterModule } from '@angular/router';
import { ProRouteComponent } from './pro-route.component';
import { ProResolveComponent } from './pro-resolve/pro-resolve.component';
import { ProCanActivateComponent } from './pro-can-activate/pro-can-activate.component';
import { ProCanDeactivateComponent } from './pro-can-deactivate/pro-can-deactivate.component';
import { CanActivateGuard } from './guard/can-activate.guard';
import { CanDeactivateGuard } from './guard/can-deactivate.guard';
import { ResolveGuard } from './guard/resolve.guard';


const routes: Routes = [
  {
    path: 'pro-route', component: ProRouteComponent, children: [
      {
        path: 'pro-resolve', component: ProResolveComponent
        , resolve: {
          student: ResolveGuard
        }
      },
      {
        path: 'pro-can-activate', component: ProCanActivateComponent
        , canActivate: [CanActivateGuard]
      },
      {
        path: 'pro-can-deactivate', component: ProCanDeactivateComponent
        , canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
];


export const ProRouteRouting = RouterModule.forChild(routes);
