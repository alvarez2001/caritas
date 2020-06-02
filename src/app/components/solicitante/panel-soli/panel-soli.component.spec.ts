import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSoliComponent } from './panel-soli.component';

describe('PanelSoliComponent', () => {
  let component: PanelSoliComponent;
  let fixture: ComponentFixture<PanelSoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
