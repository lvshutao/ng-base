import { TestBed, inject } from '@angular/core/testing';

import { MyTeacherService } from './my-teacher.service';

describe('MyTeacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTeacherService]
    });
  });

  it('should be created', inject([MyTeacherService], (service: MyTeacherService) => {
    expect(service).toBeTruthy();
  }));
});
