import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemploRoutingComponent } from './ejemplo-routing/ejemplo-routing.component';
import { AppComponent } from './app.component';
import { EjemploRoutingCualquierOtroComponent } from './ejemplo-routing-cualquier-otro/ejemplo-routing-cualquier-otro.component';
import { HomeComponent } from './home/home.component';
import { EjemplosTodosComponent } from './ejemplos-todos/ejemplos-todos.component';


const routes: Routes = [
  {path: 'ejemploRouting', component: EjemploRoutingComponent},
  {path: 'ejemplosTodos', component: EjemplosTodosComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: EjemploRoutingCualquierOtroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
