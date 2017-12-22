import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-route-const',
  templateUrl: './my-route-const.component.html',
  styleUrls: ['./my-route-const.component.css']
})

export class MyRouteConstComponent implements OnInit {

  private isProd: boolean;
  private name: string;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.isProd = this.routeInfo.snapshot.data[0]['isProd'];
    this.name = this.routeInfo.snapshot.data[0]['name'];
  }

}
