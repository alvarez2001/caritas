import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAutorizadasComponent } from './listar-autorizadas.component';

describe('ListarAutorizadasComponent', () => {
  let component: ListarAutorizadasComponent;
  let fixture: ComponentFixture<ListarAutorizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAutorizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAutorizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
