import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByIdComponent } from './report-by-id.component';

describe('ReportByIdComponent', () => {
  let component: ReportByIdComponent;
  let fixture: ComponentFixture<ReportByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
