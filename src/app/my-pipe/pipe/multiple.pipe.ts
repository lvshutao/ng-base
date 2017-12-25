import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'multiple' // 管道的名字
})
export class MultiplePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  // value 原始值, args 参数
  transform(value: number, args?: number): number {
    if (!args) {
      args = 1;
    }
    return value * args;
  }

}
