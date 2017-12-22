import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRouteChildComponent } from './my-route-child.component';

describe('MyRouteChildComponent', () => {
  let component: MyRouteChildComponent;
  let fixture: ComponentFixture<MyRouteChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRouteChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRouteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
