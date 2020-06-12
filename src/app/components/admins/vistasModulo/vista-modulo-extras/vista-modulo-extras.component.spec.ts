import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaModuloExtrasComponent } from './vista-modulo-extras.component';

describe('VistaModuloExtrasComponent', () => {
  let component: VistaModuloExtrasComponent;
  let fixture: ComponentFixture<VistaModuloExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaModuloExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaModuloExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
