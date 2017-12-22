import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRouteConstComponent } from './my-route-const.component';

describe('MyRouteConstComponent', () => {
  let component: MyRouteConstComponent;
  let fixture: ComponentFixture<MyRouteConstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRouteConstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRouteConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
