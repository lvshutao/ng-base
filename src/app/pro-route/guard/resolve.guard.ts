import {Resolve, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

import {Student} from '../pro-resolve/pro-resolve.component';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';


// 返回的数据类型为 Student
@Injectable()
export class ResolveGuard implements Resolve<Student> {

  // 需要使用到 @Injectable()
  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Student>
  // | Promise<Student> | Student
  {
    // 注意参数传递方式
    // let id = route.params['id'];

    let id = route.queryParamMap.get('id');
    if (parseInt(id) == 1) {
      return this.answerByObservable();
    } else {
      this.router.navigate(['my-route']);
      return null;
    }
  }

  answerByObservable(): Observable<Student> {
    console.log('Resolving Observable...');
    return new Observable(observer => {
      setTimeout(() => {
        console.log('Resolved Observable');
        let student = new Student(11, 'Form Observable');
        observer.next(student);
        setTimeout(() => {
          console.log('Complete Observable');
          observer.complete();
        }, 1000);
      }, 2000);
    });
  }

  // answerByPromise(): Promise<Student> {
  //     let student = new Student(12, 'Form Promise');
  // console.log('Async work Complete');
  // var p = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //         resolve(student);
  //     }, 3000);
  // })
  // return p;

  //     return Promise.resolve(student); //最简单的
  // }

  // answerByData(): Student {
  //     return new Student(13, 'From Data');
  // }

}
