import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaInventarioComponent } from './elimina-inventario.component';

describe('EliminaInventarioComponent', () => {
  let component: EliminaInventarioComponent;
  let fixture: ComponentFixture<EliminaInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminaInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
