function cambiarIdiomaEnglish(){
    if(document.getElementById("texto-original")!=null){
        let texto = document.getElementById("texto-original");
        let titulo = document.getElementById("titulo-original");
        texto.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        titulo.innerHTML="What is Lorem Ipsum?";
        texto.lang="en";
        titulo.lang="en";
    }else{
        let texto = document.getElementById("texto-alternativo");
        let titulo = document.getElementById("titulo-alternativo");
        texto.innerHTML="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
        titulo.innerHTML="Why do we use it?";
        texto.lang="en";
        titulo.lang="en";
    }
}

function cambiarIdiomaEspanol(){
    if(document.getElementById("texto-original")!=null){
        let texto = document.getElementById("texto-original");
        let titulo = document.getElementById("titulo-original");
        texto.innerHTML="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est??ndar de las industrias desde el a??o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us?? una galer??a de textos y los mezcl?? de tal manera que logr?? hacer un libro de textos especimen. No s??lo sobrevivi?? 500 a??os, sino que tambien ingres?? como texto de relleno en documentos electr??nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci??n de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y m??s recientemente con software de autoedici??n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
        titulo.innerHTML="??Qu?? es Lorem Ipsum?";
        texto.lang="es";
        titulo.lang="es";
    }else{
        let texto = document.getElementById("texto-alternativo");
        let titulo = document.getElementById("titulo-alternativo");
        texto.innerHTML="Es un hecho establecido hace demasiado tiempo que un lector se distraer?? con el contenido del texto de un sitio mientras que mira su dise??o. El punto de usar Lorem Ipsum es que tiene una distribuci??n m??s o menos normal de las letras, al contrario de usar textos como por ejemplo 'Contenido aqu??, contenido aqu??'. Estos textos hacen parecerlo un espa??ol que se puede leer. Muchos paquetes de autoedici??n y editores de p??ginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una b??squeda de 'Lorem Ipsum' va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a trav??s de los a??os, algunas veces por accidente, otras veces a prop??sito (por ejemplo insert??ndole humor y cosas por el estilo).";
        titulo.innerHTML="??Por qu?? lo usamos?";
        texto.lang="es";
        titulo.lang="es";
    }
}

function cambiarTextoAlternativo(){
    if(document.getElementById("texto-original")!=null){
        let texto = document.getElementById("texto-original");
        texto.id="texto-alternativo";
        let titulo = document.getElementById("titulo-original");
        titulo.id="titulo-alternativo";
        if(texto.lang=="es"){
            texto.innerHTML="Es un hecho establecido hace demasiado tiempo que un lector se distraer?? con el contenido del texto de un sitio mientras que mira su dise??o. El punto de usar Lorem Ipsum es que tiene una distribuci??n m??s o menos normal de las letras, al contrario de usar textos como por ejemplo 'Contenido aqu??, contenido aqu??'. Estos textos hacen parecerlo un espa??ol que se puede leer. Muchos paquetes de autoedici??n y editores de p??ginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una b??squeda de 'Lorem Ipsum' va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a trav??s de los a??os, algunas veces por accidente, otras veces a prop??sito (por ejemplo insert??ndole humor y cosas por el estilo).";
            titulo.innerHTML="??Por qu?? lo usamos?"; 
        }else{
            texto.innerHTML="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
            titulo.innerHTML="Why do we use it?";
        }
    }
}

function cambiarTextoOriginal(){
    if(document.getElementById("texto-alternativo")!=null){
        let texto = document.getElementById("texto-alternativo");
        texto.id="texto-original";
        let titulo = document.getElementById("titulo-alternativo");
        titulo.id="titulo-original";
        if(texto.lang=="es"){
            texto.innerHTML="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est??ndar de las industrias desde el a??o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us?? una galer??a de textos y los mezcl?? de tal manera que logr?? hacer un libro de textos especimen. No s??lo sobrevivi?? 500 a??os, sino que tambien ingres?? como texto de relleno en documentos electr??nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci??n de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y m??s recientemente con software de autoedici??n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.";
            titulo.innerHTML="??Qu?? es Lorem Ipsum?"; 
        }else{
            texto.innerHTML="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
            titulo.innerHTML="What is Lorem Ipsum?";
        }
    }
}

function cambiarFondoOscuro(){
    document.body.style.background = "linear-gradient(to right, black, #414141)";
    document.getElementById("navbar").className="navbar navbar-expand-lg navbar-dark bg-dark";
}

function cambiarFondoVerde(){
    document.body.style.background = "linear-gradient(to right, #11AE54, white)";
    document.getElementById("navbar").className="navbar navbar-expand-lg navbar-dark bg-success";
}

function cambiarFondoClaro(){
    document.body.style.background = "linear-gradient(to right, beige, white)";
    document.getElementById("navbar").className="navbar navbar-expand-lg navbar-light bg-light";
}

function getHoraActual(){
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if(horas<10){
        horas = "0"+horas;
    }
    if(minutos<10){
        minutos = "0"+minutos;
    }
    if(segundos<10){
        segundos = "0"+segundos;
    }
    
    let reloj = horas+" : "+minutos+" : "+segundos;
    return reloj;
}

function actualizar() {
    let horaActual=getHoraActual();
    let reloj=document.getElementById("reloj");
    reloj.innerHTML=horaActual;
}

setInterval(actualizar,1000);