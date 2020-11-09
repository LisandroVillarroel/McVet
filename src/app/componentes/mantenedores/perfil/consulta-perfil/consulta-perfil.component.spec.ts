import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPerfilComponent } from './consulta-perfil.component';

describe('ConsultaPerfilComponent', () => {
  let component: ConsultaPerfilComponent;
  let fixture: ComponentFixture<ConsultaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
