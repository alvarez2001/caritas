import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSoliComponent } from './footer-soli.component';

describe('FooterSoliComponent', () => {
  let component: FooterSoliComponent;
  let fixture: ComponentFixture<FooterSoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
