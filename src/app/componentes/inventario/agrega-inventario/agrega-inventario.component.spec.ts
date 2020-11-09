import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaInventarioComponent } from './agrega-inventario.component';

describe('AgregaInventarioComponent', () => {
  let component: AgregaInventarioComponent;
  let fixture: ComponentFixture<AgregaInventarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaInventarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
