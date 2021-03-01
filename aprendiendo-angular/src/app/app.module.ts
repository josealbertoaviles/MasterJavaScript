import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import{routing, appRoutingProviders} from './app.routing'

import { AppComponent } from './app.component';
import { VideojuegoComponent} from './videojuegos/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
