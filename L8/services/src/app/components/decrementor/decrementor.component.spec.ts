import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementorComponent } from './decrementor.component';

describe('DecrementorComponent', () => {
  let component: DecrementorComponent;
  let fixture: ComponentFixture<DecrementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecrementorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecrementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
