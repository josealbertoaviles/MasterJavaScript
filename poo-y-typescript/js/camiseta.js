var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//DecoradoR: se pueden apliar las funcionalidades/metodos de una clase
/*function estampar(logo:string){
    return function(target:Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con logo: "+logo);
        }
    }
}
@estampar('Gucci')*/
var Camiseta = /** @class */ (function () {
    //Constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //getters y setters
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    return Camiseta;
}());
//Clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    return Sudadera;
}(Camiseta));
var camiseta = new Camiseta("rojo", "Corta", "nike", "xl", 10);
var sudadera = new Sudadera("rojo", "Corta", "nike", "xl", 10);
sudadera.setCapucha(true);
console.log(camiseta);
console.log(sudadera);
//camiseta.estampacion();
console.log(camiseta.getColor());
