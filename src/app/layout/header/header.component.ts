import {Component, OnInit} from '@angular/core';
import {WsService} from '../../my-http/ws-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  msg: Message[] = []; // 必须初始化，否则下面的 push 会失败

  constructor(private ws: WsService) {
  }

  ngOnInit() {
    this.ws.connect('ws://127.0.0.1:9503')
      .subscribe(
        response => {
          if (response.indexOf('server:') === 0) {
            let content = response.substring(7).trim();
            let message = JSON.parse(content) as Message;
            this.msg.push(message);
          }
        },
        error => console.log('ws error:', error),
        () => console.log('ws disconnected.')
      );
  }

}

export class Message {
  public type: string;
  public id: number;
  public message: string;
}
