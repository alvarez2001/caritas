import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRechaAutoriComponent } from './listar-recha-autori.component';

describe('ListarRechaAutoriComponent', () => {
  let component: ListarRechaAutoriComponent;
  let fixture: ComponentFixture<ListarRechaAutoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRechaAutoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRechaAutoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
