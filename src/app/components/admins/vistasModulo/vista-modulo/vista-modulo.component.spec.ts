import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaModuloComponent } from './vista-modulo.component';

describe('VistaModuloComponent', () => {
  let component: VistaModuloComponent;
  let fixture: ComponentFixture<VistaModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
