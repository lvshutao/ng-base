import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormTplComponent } from './my-form-tpl.component';

describe('MyFormTplComponent', () => {
  let component: MyFormTplComponent;
  let fixture: ComponentFixture<MyFormTplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormTplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
