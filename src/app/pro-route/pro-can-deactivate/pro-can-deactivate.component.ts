import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pro-can-deactivate',
  templateUrl: './pro-can-deactivate.component.html',
  styleUrls: ['./pro-can-deactivate.component.css']
})

export class ProCanDeactivateComponent implements OnInit {

  private isChecked = false;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  toggle() {
    this.isChecked = !this.isChecked;
  }

  hasChecked() {
    return this.isChecked;
  }

  goBack() {
    this.location.back();
  }

}
