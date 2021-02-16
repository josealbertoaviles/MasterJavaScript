var pelicula1 = {
    titulo:'batma vs superman',
    año: 2017,
    pais:'EEUU'
}
var pelicula2 = {
    titulo:'spiderman',
    año: 2017,
    pais:'EEUU'
}
var pelicula3 = {
    titulo:'aliens',
    año: 2017,
    pais:'EEUU'
}

var peliculas = [pelicula1,pelicula2,pelicula3];

var cajaPeliculas=document.querySelector("#peliculas");

for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo +" - "+peliculas[index].año);
    cajaPeliculas.append(p);
}