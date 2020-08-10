import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosTodosComponent } from './ejemplos-todos.component';

describe('EjemplosTodosComponent', () => {
  let component: EjemplosTodosComponent;
  let fixture: ComponentFixture<EjemplosTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemplosTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplosTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
