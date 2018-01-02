import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyAnimationIndexComponent} from './my-animation-index/my-animation-index.component';
import {MyAnimationRouting} from './my-animation.routing';

@NgModule({
  imports: [
    CommonModule,
    MyAnimationRouting
  ],
  declarations: [MyAnimationIndexComponent]
})
export class MyAnimationModule {
}
