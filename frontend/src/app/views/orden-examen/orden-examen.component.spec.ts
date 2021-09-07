import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenExamenComponent } from './orden-examen.component';

describe('OrdenExamenComponent', () => {
  let component: OrdenExamenComponent;
  let fixture: ComponentFixture<OrdenExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
