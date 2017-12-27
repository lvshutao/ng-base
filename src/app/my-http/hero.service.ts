import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';


// 需要查阅英文文档
// Demo - [HTTP](https://angular.io/tutorial/toh-pt6)
// 详解 - [HttpClient](https://angular.io/guide/http)
// .retry(3) 在提交失败后，尝试重新提交的次数
// 自定义服务，以对所有的请求、响应做出处理 https://angular.io/guide/http#intercepting-all-requests-or-responses
// 示例 src/app/my-http/noop-interceptor.ts

@Injectable()
export class HeroService {

  private url = 'api/heroes';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url)
      .pipe(
        // 使用 tag ，允许你提前进处错误处理
        tap(heroes => console.log('fetched heroes:', heroes)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.url}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => console.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.url, hero, this.httpOptions)
      .pipe(
        tap((hero: Hero) => console.log(`add hero w/ id = ${hero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  update(hero: Hero): Observable<any> {
    return this.http.put(this.url, hero, this.httpOptions)
      .pipe(
        tap(_ => console.log(`update hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }



  remove(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`delete hero id =${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
  }
}
