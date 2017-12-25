import {Component, OnInit} from '@angular/core';
import {Teacher} from '../teacher';
import {Router} from '@angular/router';
import {MyTeacherService} from '../my-teacher.service';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/debounceTime';

// import 'rxjs/Rx'; // 属于一次性导入全部

@Component({
  selector: 'app-my-form-index',
  templateUrl: './my-form-index.component.html',
  styleUrls: ['./my-form-index.component.css']
})
export class MyFormIndexComponent implements OnInit {

  teachers: Teacher[];

  // 响应式搜索
  // 每当被 searchInput 绑定的元素发生值改变时，就会发身一个 valueChange 事件
  searchFilter: FormControl = new FormControl();

  constructor(private router: Router, private myTeacher: MyTeacherService) {
    this.searchFilter.valueChanges
      .debounceTime(1000)
      .subscribe(keyword => this.onSearch(keyword));
  }

  ngOnInit() {
    this.teachers = this.myTeacher.getTeachers();
  }

  onEdit(teacher: Teacher) {
    this.router.navigate(['teacher-detail', teacher.id]);
  }

  onDelete(teacher: Teacher) {
    this.teachers = this.teachers.filter((t) => t.id != teacher.id);
  }


  onSearch(text: string) {
    let teachers = this.myTeacher.getTeachers();
    this.teachers = text ? this.teachers.filter(teacher => teacher.name.indexOf(text) > 0) : teachers;
  }
}
