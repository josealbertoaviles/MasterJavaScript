
import {Component, OnInit} from '@angular/core';
import {Videojuego} from '../models/videojuego';
import{VideojuegoService} from '../services/videojuego.service';
@Component({
    selector:'videojuego',
    templateUrl: './videojuegos.component.html',
    providers: [VideojuegoService]
})

export class VideojuegoComponent {
    public titulo:string;
    public listado: string;
    
    public miJuego:string;
    public misJuegos = Array<string>();
    public videojuegos: Array<Videojuego>;
    constructor(
        private _videojuegoService: VideojuegoService
    ){
        this.titulo ="Videojuegos";
        this.listado="Listado de los juegos más populare";
        this.videojuegos=_videojuegoService.getVideojuegos();
    

    }
    getMarca(){
        alert(this.miJuego)
    }
    addJuego(){
        this.misJuegos.push(this.miJuego);
    }
}