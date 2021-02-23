//interface
interface CamisetaBasde{
    setColor(color);
    getColor();
}
//DecoradoR: se pueden apliar las funcionalidades/metodos de una clase
/*function estampar(logo:string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con logo: "+logo);
        }
    }
}
@estampar('Gucci')*/
class Camiseta implements CamisetaBasde {
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    //Constructor
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    //getters y setters
    public getColor() {
        return this.color;
    }
    public setColor(color) {
        this.color = color;
    }
}

//Clase hija

class Sudadera extends Camiseta{
    private capucha:boolean;
    public getCapucha() {
        return this.capucha;
    }
    public setCapucha(capucha) {
        this.capucha = capucha;
    }
}


var camiseta = new Camiseta("rojo", "Corta", "nike", "xl", 10);
var sudadera = new Sudadera("rojo", "Corta", "nike", "xl", 10);
sudadera.setCapucha(true);
console.log(camiseta);
console.log(sudadera);
//camiseta.estampacion();
console.log(camiseta.getColor());