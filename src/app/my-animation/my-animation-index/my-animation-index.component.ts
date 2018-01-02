import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-my-animation-index',
  templateUrl: './my-animation-index.component.html',
  styleUrls: ['./my-animation-index.component.css'],
  animations: [
    trigger('myAnimations', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ])
  ]
})
export class MyAnimationIndexComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  state = 'active';

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

}
