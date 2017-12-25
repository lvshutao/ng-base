import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MyTeacherService} from '../my-teacher.service';
import {Teacher} from '../teacher';
import {PageInfoService} from '../../share/page-info.service';

@Component({
  selector: 'app-my-form-edit',
  templateUrl: './my-form-edit.component.html',
  styleUrls: ['./my-form-edit.component.css']
})
export class MyFormEditComponent implements OnInit {

  teacher: Teacher;

  constructor(private routeInfo: ActivatedRoute,
              private myTeacher: MyTeacherService,
              private pageInfo: PageInfoService,
              private router: Router) {
    this.pageInfo.title = '组件交互';
  }

  ngOnInit() {
    let id = this.routeInfo.snapshot.params['id'];
    this.teacher = Object.assign({}, this.myTeacher.getTeacher(id));
  }

  cancel() {
    this.router.navigate(['my-form']);
  }

  save() {
    this.router.navigate(['my-form']);
  }

  onRating(rate: number) {
    this.teacher.rate = rate;
  }

}
