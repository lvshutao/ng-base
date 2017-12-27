import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpIndexComponent } from './my-http-index.component';

describe('MyHttpIndexComponent', () => {
  let component: MyHttpIndexComponent;
  let fixture: ComponentFixture<MyHttpIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHttpIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHttpIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
