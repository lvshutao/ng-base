import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRouteChild2Component } from './my-route-child2.component';

describe('MyRouteChild2Component', () => {
  let component: MyRouteChild2Component;
  let fixture: ComponentFixture<MyRouteChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRouteChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRouteChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
