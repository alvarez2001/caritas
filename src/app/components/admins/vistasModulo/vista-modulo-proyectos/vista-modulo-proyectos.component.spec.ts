import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaModuloProyectosComponent } from './vista-modulo-proyectos.component';

describe('VistaModuloProyectosComponent', () => {
  let component: VistaModuloProyectosComponent;
  let fixture: ComponentFixture<VistaModuloProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaModuloProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaModuloProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
