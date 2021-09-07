import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSaludComponent } from './plan-salud.component';

describe('PlanSaludComponent', () => {
  let component: PlanSaludComponent;
  let fixture: ComponentFixture<PlanSaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
