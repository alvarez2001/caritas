import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolAutorizadasComponent } from './listar-sol-autorizadas.component';

describe('ListarSolAutorizadasComponent', () => {
  let component: ListarSolAutorizadasComponent;
  let fixture: ComponentFixture<ListarSolAutorizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolAutorizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolAutorizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
