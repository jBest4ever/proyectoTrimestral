import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fecha1 = new Date(2020,3,24);

  toLowerCase = "HOLA";

  toUpperCase = "mundo";

}
