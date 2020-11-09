import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaEmpresaComponent } from './agrega-empresa.component';

describe('AgregaEmpresaComponent', () => {
  let component: AgregaEmpresaComponent;
  let fixture: ComponentFixture<AgregaEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
