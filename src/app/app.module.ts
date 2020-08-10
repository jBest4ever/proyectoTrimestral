import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { AnimacionComponent } from './animacion/animacion.component';
import { EjemploRoutingComponent } from './ejemplo-routing/ejemplo-routing.component';
import { EjemploRoutingCualquierOtroComponent } from './ejemplo-routing-cualquier-otro/ejemplo-routing-cualquier-otro.component';
import { EjemplosTodosComponent } from './ejemplos-todos/ejemplos-todos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasComponent,
    PipesComponent,
    BibliotecaComponent,
    AnimacionComponent,
    EjemploRoutingComponent,
    EjemploRoutingCualquierOtroComponent,
    EjemplosTodosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
