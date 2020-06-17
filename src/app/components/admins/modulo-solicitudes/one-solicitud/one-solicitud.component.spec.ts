import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSolicitudComponent } from './one-solicitud.component';

describe('OneSolicitudComponent', () => {
  let component: OneSolicitudComponent;
  let fixture: ComponentFixture<OneSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
