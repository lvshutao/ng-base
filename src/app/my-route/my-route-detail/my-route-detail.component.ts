import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-my-route-detail',
  templateUrl: './my-route-detail.component.html',
  styleUrls: ['./my-route-detail.component.css']
})
export class MyRouteDetailComponent implements OnInit {

  private id: number;
  private name: string;

  private sid: number;
  private sname: string;

  constructor(private location: Location, // 用于返回
              private routeInfo: ActivatedRoute // 路由参数
  ) {
  }

  ngOnInit() {
    this.id = this.routeInfo.snapshot.params['id'];
    this.name = this.routeInfo.snapshot.params['name'];

    this.routeInfo.params.subscribe((params: Params) => {
      this.sid = params['id'];
      this.sname = params['name'];
    });
  }

  goBack() {
    this.location.back();
  }

}
