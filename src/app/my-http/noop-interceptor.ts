import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // 你可以在这个服务中做很多事，比如
    // 修改协议
    const secureReq = req.clone({url: req.url.replace('http://', 'https://')});
    // console.log('NoopInterceptor:', secureReq);
    // 增加身份标识
    const authHeader = 'ng demo';
    const authReq = req.clone({
      // 设置新值，包括 Authentication/authorization, If-Modified-Since, XSRF protection
      headers: req.headers.set('Authorization', authHeader)
    });
    // return next.handle(authReq);

    // 缓存数据
    // 监听事件的处理进程 HttpEventType.UploadProgree
    // 性能日志
    // 以上功能，全部都在 https://angular.io/guide/http 中有示例
    const started = Date.now();
    return next.handle(req).do(event => {
      if (event instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
      }
    });

    // return next.handle(req);
  }
}
