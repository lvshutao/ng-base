import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pro-resolve',
  templateUrl: './pro-resolve.component.html',
  styleUrls: ['./pro-resolve.component.css']
})
export class ProResolveComponent implements OnInit {

  private student: Student;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {

    this.routeInfo.data.subscribe((data: { student: Student }) => {
      this.student = data.student;
    })
  }

}

export class Student {
  // 如果属性不写 public，那么将无法获取到数据哦 -------
  constructor(public id: number, public name: string) { }
}