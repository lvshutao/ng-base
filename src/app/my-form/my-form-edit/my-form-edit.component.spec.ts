import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormEditComponent } from './my-form-edit.component';

describe('MyFormEditComponent', () => {
  let component: MyFormEditComponent;
  let fixture: ComponentFixture<MyFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
