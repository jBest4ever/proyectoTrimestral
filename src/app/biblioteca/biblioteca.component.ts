import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro.model';
import { LIBROS } from '../mocks/mocks';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {

  constructor() { }

  libros: Libro[];
  
  ngOnInit() {
    this.libros = LIBROS;
  }

}
