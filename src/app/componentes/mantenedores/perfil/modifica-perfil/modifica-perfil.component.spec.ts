import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPerfilComponent } from './modifica-perfil.component';

describe('ModificaPerfilComponent', () => {
  let component: ModificaPerfilComponent;
  let fixture: ComponentFixture<ModificaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
