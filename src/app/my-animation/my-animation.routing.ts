import {RouterModule, Routes} from '@angular/router';
import {MyAnimationIndexComponent} from './my-animation-index/my-animation-index.component';

const routes: Routes = [
  {path: 'my-animation', component: MyAnimationIndexComponent}
];

export const MyAnimationRouting = RouterModule.forChild(routes);
