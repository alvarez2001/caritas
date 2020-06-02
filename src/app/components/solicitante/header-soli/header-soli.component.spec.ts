import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSoliComponent } from './header-soli.component';

describe('HeaderSoliComponent', () => {
  let component: HeaderSoliComponent;
  let fixture: ComponentFixture<HeaderSoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
