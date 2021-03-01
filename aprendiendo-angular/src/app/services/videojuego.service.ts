import { from } from "rxjs";
import{Injectable} from "@angular/core";
import{Videojuego} from "../models/videojuego"

@Injectable()
export class VideojuegoService{
    public videojuegos: Array<Videojuego>;
    constructor(){
        this.videojuegos =[
            new Videojuego('GTA','PS4',true,99),
            new Videojuego('CallOfDuty','PS4',true,29),
            new Videojuego('GranTurismo','PC',true,9),
            new Videojuego('LosSimpson','XBOX',true,81)
        ]
    }
    getTexto(){
        return "Hola mundo desde Servicio";
    }
    getVideojuegos(): Array<Videojuego>{
        return this.videojuegos
    }
}