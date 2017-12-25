import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPipeIndexComponent } from './my-pipe-index.component';

describe('MyPipeIndexComponent', () => {
  let component: MyPipeIndexComponent;
  let fixture: ComponentFixture<MyPipeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPipeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPipeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
