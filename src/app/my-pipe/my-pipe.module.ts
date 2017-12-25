import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyPipeIndexComponent} from './my-pipe-index/my-pipe-index.component';
import {MyPipeRouting} from './my-pipe.routing';
import { MultiplePipe } from './pipe/multiple.pipe';

@NgModule({
  imports: [
    CommonModule,
    MyPipeRouting
  ],
  declarations: [MyPipeIndexComponent, MultiplePipe]
})
export class MyPipeModule {
}
