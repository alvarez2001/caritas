import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBancoComponent } from './detalle-banco.component';

describe('DetalleBancoComponent', () => {
  let component: DetalleBancoComponent;
  let fixture: ComponentFixture<DetalleBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
