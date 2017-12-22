import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxIndexComponent } from './aux-index.component';

describe('AuxIndexComponent', () => {
  let component: AuxIndexComponent;
  let fixture: ComponentFixture<AuxIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
