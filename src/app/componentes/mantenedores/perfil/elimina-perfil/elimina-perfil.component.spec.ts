import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaPerfilComponent } from './elimina-perfil.component';

describe('EliminaPerfilComponent', () => {
  let component: EliminaPerfilComponent;
  let fixture: ComponentFixture<EliminaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
