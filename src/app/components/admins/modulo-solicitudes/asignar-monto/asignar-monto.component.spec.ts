import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarMontoComponent } from './asignar-monto.component';

describe('AsignarMontoComponent', () => {
  let component: AsignarMontoComponent;
  let fixture: ComponentFixture<AsignarMontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarMontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarMontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
