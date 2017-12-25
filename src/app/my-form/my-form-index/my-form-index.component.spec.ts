import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormIndexComponent } from './my-form-index.component';

describe('MyFormIndexComponent', () => {
  let component: MyFormIndexComponent;
  let fixture: ComponentFixture<MyFormIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
