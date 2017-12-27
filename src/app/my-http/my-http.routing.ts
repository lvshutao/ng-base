import {RouterModule, Routes} from '@angular/router';
import {MyHttpIndexComponent} from './my-http-index/my-http-index.component';

const routes: Routes = [
  {
    path: 'my-http', component: MyHttpIndexComponent
  }
];

export const MyHttpRouting = RouterModule.forChild(routes);
