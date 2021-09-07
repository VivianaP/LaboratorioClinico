import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarResultadoComponent } from './consultar-resultado.component';

describe('ConsultarResultadoComponent', () => {
  let component: ConsultarResultadoComponent;
  let fixture: ComponentFixture<ConsultarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
