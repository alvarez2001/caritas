import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposDetalleComponent } from './campos-detalle.component';

describe('CamposDetalleComponent', () => {
  let component: CamposDetalleComponent;
  let fixture: ComponentFixture<CamposDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamposDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamposDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
