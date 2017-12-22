import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-route-index',
  templateUrl: './my-route-index.component.html',
  styleUrls: ['./my-route-index.component.css']
})
export class MyRouteIndexComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goDetail() {
    // this.router.navigate(['query']); 错误
    // this.router.navigate(['./query']); 错误
    this.router.navigate(['my-route','query'])
  }
}
