import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRouteQueryparamComponent } from './my-route-queryparam.component';

describe('MyRouteQueryparamComponent', () => {
  let component: MyRouteQueryparamComponent;
  let fixture: ComponentFixture<MyRouteQueryparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRouteQueryparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRouteQueryparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
