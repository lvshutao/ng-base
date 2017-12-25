import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-my-form-rate',
  templateUrl: './my-form-rate.component.html',
  styleUrls: ['./my-form-rate.component.css']
})

export class MyFormRateComponent implements OnInit {

  @Input()
  rating: number;
  @Input()
  readonly: boolean = false;

  @Output()
  onSelectRate = new EventEmitter<number>();

  rates: boolean[] = [];

  constructor() {
  }

  ngOnInit() {
    this.refreshStar(this.rating);
  }

  onClickStar(i: number) {
    if (this.readonly) return;
    this.onSelectRate.emit(i + 1);
    this.refreshStar(i + 1);
  }

  private refreshStar(n: number) {
    for (let i = 0; i < 5; i++) {
      this.rates[i] = i < n;
    }
  }
}
