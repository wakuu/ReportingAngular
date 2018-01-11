import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltresDateComponent } from './filtres-date.component';

describe('FiltresDateComponent', () => {
  let component: FiltresDateComponent;
  let fixture: ComponentFixture<FiltresDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltresDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltresDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
