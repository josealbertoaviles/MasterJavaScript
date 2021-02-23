$(document).ready(function(){
    //slider
    $('.slider').bxSlider({
        mode:'fade',
        captions:true,
        slideWidth: 1200
    });
    //posts
    var posts=[
        {
            title: 'Prueba de titulo 1',
            date: 'Fecha: ' + moment().format("MMMM Do YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Fecha: ' + moment().format("MMMM Do YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Fecha: ' + moment().format("MMMM Do YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
            title: 'Prueba de titulo 4',
            date:'Fecha: ' + moment().format("MMMM Do YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
    ];
    posts.forEach((item, index)=>{
        var post=`
        <article class="post">
            <h2>${item.title}</h2> 
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#">Leer mas...</a> 
        </article>`;
        $("#posts").append(post);
    });
    //Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });
    //Sobre mi
    var sobreMi=[
        {
            title: '¿Quien soy?',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
            title: 'Mi carrera profesional',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also theleap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960swith the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
    ];
    sobreMi.forEach((item, index)=>{
        var sobreMi=`
        <article class="sobreMi">
            <h2>${item.title}</h2> 
            <p>${item.content}</p>
            <a href="#">Leer mas...</a> 
        </article>`;
        $("#sobreMis").append(sobreMi);
    });
    //login falso
    $("#login form").submit(function(){
        var form_name= $("#form_name").val();
        localStorage.setItem("form_name",form_name);
    });
    var form_name = localStorage.getItem("form_name");
    if(form_name!= null||form_name!= undefined){     
        var about_parrafo=$("#about");
        about_parrafo.html("Bienvenido, "+form_name+"<br><br>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $("#login form").hide();
        $("h4").hide();
        $("#logout").click(function(){
            localStorage.clear();
            window.reload();//no funciona

        });
    }

    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        },1000);
    }
  });
