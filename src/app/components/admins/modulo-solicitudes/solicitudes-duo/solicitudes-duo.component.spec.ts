import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesDuoComponent } from './solicitudes-duo.component';

describe('SolicitudesDuoComponent', () => {
  let component: SolicitudesDuoComponent;
  let fixture: ComponentFixture<SolicitudesDuoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesDuoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesDuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
