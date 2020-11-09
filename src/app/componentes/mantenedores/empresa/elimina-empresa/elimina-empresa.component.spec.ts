import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaEmpresaComponent } from './elimina-empresa.component';

describe('EliminaEmpresaComponent', () => {
  let component: EliminaEmpresaComponent;
  let fixture: ComponentFixture<EliminaEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminaEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
