import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRouteIndexComponent } from './my-route-index.component';

describe('MyRouteIndexComponent', () => {
  let component: MyRouteIndexComponent;
  let fixture: ComponentFixture<MyRouteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRouteIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRouteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
