import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { VideojuegoComponent} from './videojuegos/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
