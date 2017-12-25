import {Injectable} from '@angular/core';
import {Teacher} from './teacher';

@Injectable()
export class MyTeacherService {

  private teachers: Teacher[] = [
    new Teacher(1, '赵AA1', 3.5, ['数学', '语文']),
    new Teacher(2, '钱BB1', 4, ['数学', '英文']),
    new Teacher(3, '孙CC12', 1, ['数学', '英文', '语文']),
    new Teacher(4, '李DD12', 4, ['数学'])
  ];

  constructor() {
  }

  getTeachers(): Teacher[] {
    return this.teachers;
  }

  getTeacher(id: number): Teacher {
    // 注意，不是 filter，而是 find
    let teacher = this.teachers.find(teacher => teacher.id == id);
    if (!teacher) {
      teacher = new Teacher(0, '', 0, []);
    }
    return teacher;
  }

}
