import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploRoutingComponent } from './ejemplo-routing.component';

describe('EjemploRoutingComponent', () => {
  let component: EjemploRoutingComponent;
  let fixture: ComponentFixture<EjemploRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
