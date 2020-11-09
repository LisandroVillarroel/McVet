import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaInventarioComponent } from './modifica-inventario.component';

describe('ModificaInventarioComponent', () => {
  let component: ModificaInventarioComponent;
  let fixture: ComponentFixture<ModificaInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
