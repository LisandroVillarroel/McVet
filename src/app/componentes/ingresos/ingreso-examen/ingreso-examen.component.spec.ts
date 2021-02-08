import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoExamenComponent } from './ingreso-examen.component';

describe('IngresoExamenComponent', () => {
  let component: IngresoExamenComponent;
  let fixture: ComponentFixture<IngresoExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
