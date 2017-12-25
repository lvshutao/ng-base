import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormRateComponent } from './my-form-rate.component';

describe('MyFormRateComponent', () => {
  let component: MyFormRateComponent;
  let fixture: ComponentFixture<MyFormRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
