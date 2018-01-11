import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingCaComponent } from './reporting-ca.component';

describe('ReportingCaComponent', () => {
  let component: ReportingCaComponent;
  let fixture: ComponentFixture<ReportingCaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingCaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
