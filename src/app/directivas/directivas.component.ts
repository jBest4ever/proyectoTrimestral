import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    // ngIf
    bandera1=true;
    bandera2=false;
  
    // ngFor
    public listaNombres = [
      {nombre:"Walther"},
      {nombre:"Julio"},
      {nombre:"Josafat"}
    ];
  
    // ngSwitch
    opcion=2;

}
