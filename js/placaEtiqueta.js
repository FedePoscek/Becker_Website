/*
pageX y pageY:
Relativo a la esquina superior izquierda del área de contenido totalmente renderizado en el navegador. Este punto de referencia está debajo de la barra de URL y el botón Atrás en la esquina superior izquierda. Este punto podría estar en cualquier lugar de la ventana del navegador y puede cambiar de ubicación si hay páginas desplazables incrustadas dentro de las páginas y el usuario mueve una barra de desplazamiento.

screenX y screenY:
En relación con la parte superior izquierda de la pantalla / monitor físico, este punto de referencia solo se mueve si aumenta o disminuye el número de monitores o la resolución del monitor.

clientX y clientY:
Relativo al borde superior izquierdo del área de contenido the viewport) de la ventana del navegador. Este punto no se mueve incluso si el usuario mueve una barra de desplazamiento desde el navegador.

offsetX y offsetY:
Devuelve la posición, donde se hizo click, en X o Y relativo a la imagen. 
*/


function cambioTexto(event) {
   // event.offsetX - devuelve la posición, donde se hizo click, en X o en Y relativo a la imagen.
    var cX = event.offsetX;
    var cY = event.offsetY;

    var ancho_img = document.getElementById("etiqueta-img").width;
    var alto_img =  document.getElementById("etiqueta-img").height;
    
    // nueva becker botellín
    if(((ancho_img * 0.15) < cX) && ((ancho_img * 0.35) > cX) && ((alto_img * 0.1) < cY) && ((alto_img * 0.35) > cY)){
         title_side.innerHTML = 'nuevo botellín';  
         title_side.style.color = 'var(--color-blanco)';   
         text_side.innerHTML = 'Botellín con el tamaño justo, pagá únicamente la cerveza que consumís!';
         text_side.style.color = 'var(--color-celeste)';
         Etiqueta_sideText.style.background = 'rgba(var(--color-azul-oscuro-RGB), 0.2)';

            console.log("arriba IZQ");
      } 
    // viva la devolución!
    else if(((ancho_img * 0.65) < cX) && ((ancho_img * 0.85) > cX) && ((alto_img * 0.1) < cY) && ((alto_img * 0.30) > cY)){
         title_side.innerHTML = 'devolvé por otra!';  
         title_side.style.color = 'var(--color-celeste)';   
         text_side.innerHTML = 'Minimiza la generación de residuos y el consumidor cuida el Medio Ambiente.';
         text_side.style.color = 'var(--color-blanco)';
         Etiqueta_sideText.style.background = 'rgba(var(--color-azul-oscuro-RGB), 0.2)';
            console.log("arriba DER");
      }
     // sensor de frío
    else if(((ancho_img * 0.1) < cX) && ((ancho_img * 0.35) > cX) && ((alto_img * 0.7) < cY) && ((alto_img * 0.9) > cY)){
         title_side.innerHTML = 'con sensor de frío!';  
         title_side.style.color = 'var(--color-celeste)';   
         text_side.innerHTML = 'Cuándo la imagen del brindis pasa de gris a celeste ya está lista para tomar.';
         text_side.style.color = 'var(--color-blanco)';
         Etiqueta_sideText.style.background = 'rgba(var(--color-azul-oscuro-RGB), 0.2)';
            console.log("abajo IZQ");
      }
     // ideal con amigos
     else if(((ancho_img * 0.65) < cX) && ((ancho_img * 0.90) > cX) && ((alto_img * 0.45) < cY) && ((alto_img * 0.65) > cY)){
         title_side.innerHTML = 'becker va con vos!';  
         title_side.style.color = 'var(--color-blanco)';   
         text_side.innerHTML = 'Cerveza lager equilibrada, transparente dorada, con excelente nivel de espuma y sabor.';
         text_side.style.color = 'var(--color-celeste)';
         Etiqueta_sideText.style.background = 'rgba(var(--color-azul-oscuro-RGB), 0.2)';
            console.log("abajo IZQ");
      }
     // si clickeas po fuera de los circulos      
     else {
         title_side.innerHTML = 'click! click! click!';  
         title_side.style.color = 'var(--color-azul-oscuro'; 
         text_side.innerHTML = 'Hace click en los circulos para conocer las novedades.';
         text_side.style.color = 'var(--color-azul-oscuro)';
         Etiqueta_sideText.style.background = 'none';
            console.log("abajo DER");
      }
   // referencia en la consola de donde estoy clickeando y que tamaño tiene la imagen
   console.log("cX = " + cX);
   console.log("cy = " + cY);
   console.log("ancho x alto = " + ancho_img + " x " + alto_img);
}