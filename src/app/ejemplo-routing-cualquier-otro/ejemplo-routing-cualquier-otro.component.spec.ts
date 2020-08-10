import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploRoutingCualquierOtroComponent } from './ejemplo-routing-cualquier-otro.component';

describe('EjemploRoutingCualquierOtroComponent', () => {
  let component: EjemploRoutingCualquierOtroComponent;
  let fixture: ComponentFixture<EjemploRoutingCualquierOtroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploRoutingCualquierOtroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploRoutingCualquierOtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
