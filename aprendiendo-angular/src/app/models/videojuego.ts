export class Videojuego {
    /*
        public nombre: string;
        public marca: string;
        public color: string;
        public stock: boolean;
        public precio: number;
    
        constructor(nombre, marca, color, stock, precio) {
            this.nombre = nombre;
            this.marca = marca;
            this.color = color;
            this.precio = precio;
            this.stock = stock;
        }*/
    
        constructor(public nombre: string,
            public plataforma: string,
            public stock: boolean,
            public precio: number){
    
        }
    }