import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCrearProyectoComponent } from './detalle-crear-proyecto.component';

describe('DetalleCrearProyectoComponent', () => {
  let component: DetalleCrearProyectoComponent;
  let fixture: ComponentFixture<DetalleCrearProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCrearProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCrearProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
