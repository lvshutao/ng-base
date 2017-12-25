import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-pipe-index',
  templateUrl: './my-pipe-index.component.html',
  styleUrls: ['./my-pipe-index.component.css']
})
export class MyPipeIndexComponent implements OnInit {

  birthday = new Date();
  money = 10.259;
  e = 2.718281828459045;
  p = 1.245;

  constructor() {
  }

  ngOnInit() {
  }

}
