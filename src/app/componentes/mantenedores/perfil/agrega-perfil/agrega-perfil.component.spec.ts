import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaPerfilComponent } from './agrega-perfil.component';

describe('AgregaPerfilComponent', () => {
  let component: AgregaPerfilComponent;
  let fixture: ComponentFixture<AgregaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
