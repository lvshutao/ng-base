import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

// web-socket 服务
@Injectable()
export class WsService {
  ws: WebSocket;

  constructor() {
  }

  connect(url: string): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      }
    );
  }

  send(message: string) {
    this.ws.send(message);
  }
}
