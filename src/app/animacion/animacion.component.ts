import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.css'],
  animations: [
    trigger('estado', [
      state('inactivo', style({
        backgroundColor: '#FFFF00',
        transform: 'scale(1)'
      })),
      state('activo', style({
        backgroundColor: '#013ADF',
        transform: 'scale(1.5)'
      })),
      transition('inactivo => activo', animate('1000ms ease-in')),
      transition('activo => inactivo', animate('1000ms ease-out'))
    ])
  ]
})
export class AnimacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  estado: string = 'inactivo';

  cambioEstado(){
    this.estado = ( this.estado == 'activo') ? 'inactivo' : 'activo';
  }

}
