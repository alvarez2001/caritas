import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallerevSolicitudComponent } from './detallerev-solicitud.component';

describe('DetallerevSolicitudComponent', () => {
  let component: DetallerevSolicitudComponent;
  let fixture: ComponentFixture<DetallerevSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallerevSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallerevSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
