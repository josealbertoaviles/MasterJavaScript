var lenguajes = new Array("Java", "JavaScript", "C", "C++", "Python");

document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");

lenguajes.forEach((elemento,indice)=>{
    document.write("<li>"+indice+" - " + elemento + "</li>");
});