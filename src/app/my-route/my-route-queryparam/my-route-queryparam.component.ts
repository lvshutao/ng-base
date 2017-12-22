import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-my-route-queryparam',
  templateUrl: './my-route-queryparam.component.html',
  styleUrls: ['./my-route-queryparam.component.css']
})

export class MyRouteQueryparamComponent implements OnInit {

  // 参数快照
  private id: number;
  private name: string;

  // 参数订阅
  private sid: number;
  private sname: string;

  constructor(private location: Location, // 用于返回
              private routeInfo: ActivatedRoute, // 用来接收参数
  ) {
  }

  ngOnInit() {
    this.id = this.routeInfo.snapshot.queryParams['id'];
    this.name = this.routeInfo.snapshot.queryParams['name'];

    this.routeInfo.queryParams.subscribe((params: Params) => {
      this.sid = params['id'];
      this.sname = params['name'];
    });

  }

}
