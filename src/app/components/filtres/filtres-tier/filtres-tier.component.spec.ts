import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltresTierComponent } from './filtres-tier.component';

describe('FiltresTierComponent', () => {
  let component: FiltresTierComponent;
  let fixture: ComponentFixture<FiltresTierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltresTierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltresTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
