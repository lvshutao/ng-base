import {Component, OnInit} from '@angular/core';
import {PageInfoService} from '../../share/page-info.service';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {


  constructor(public pageInfo: PageInfoService) {

  }

  ngOnInit() {
  }

}
