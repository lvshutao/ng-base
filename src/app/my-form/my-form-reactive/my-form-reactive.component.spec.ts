import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormReactiveComponent } from './my-form-reactive.component';

describe('MyFormReactiveComponent', () => {
  let component: MyFormReactiveComponent;
  let fixture: ComponentFixture<MyFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
