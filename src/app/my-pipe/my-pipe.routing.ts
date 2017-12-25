import {RouterModule, Routes} from '@angular/router';
import {MyPipeIndexComponent} from './my-pipe-index/my-pipe-index.component';

const routes: Routes = [
  {path: 'my-pipe', component: MyPipeIndexComponent}
];

export const MyPipeRouting = RouterModule.forChild(routes);
