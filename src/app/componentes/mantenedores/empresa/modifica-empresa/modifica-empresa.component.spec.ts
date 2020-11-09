import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaEmpresaComponent } from './modifica-empresa.component';

describe('ModificaEmpresaComponent', () => {
  let component: ModificaEmpresaComponent;
  let fixture: ComponentFixture<ModificaEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
