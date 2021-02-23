import { from } from "rxjs";
import {Component} from '@angular/core';
import {Videojuego} from '../models/videojuego';
@Component({
    selector:'videojuego',
    templateUrl: './videojuegos.component.html'
})

export class VideojuegoComponent{
    public titulo:string;
    public listado: string;
    public videojuegos: Array<Videojuego>;
    public miJuego:string;
    public misJuegos = Array<string>();
    constructor(){
        this.titulo ="Videojuegos";
        this.listado="Listado de los juegos más populare";
        this.videojuegos =[
            new Videojuego('GTA','PS4',true,69),
            new Videojuego('CallOfDuty','PS4',true,29),
            new Videojuego('GranTurismo','PC',true,69),
            new Videojuego('LosSimpson','XBOX',true,9)
        ]
    
        
       
        console.log(this.videojuegos);
    }
    getMarca(){
        alert(this.miJuego)
    }
    addJuego(){
        this.misJuegos.push(this.miJuego);
    }
}