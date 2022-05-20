// variables
const nombre = document.getElementById('nombre');
const email = document.getElementById('mail');
const telefono = document.getElementById('telefono');
const consulta = document.getElementById('consulta');
const btnEnviar = document.getElementById('enviar');


// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     nombre.addEventListener('blur', validarCampo);
     email.addEventListener('blur', validarCampo);
     telefono.addEventListener('blur', validarCampo);
     consulta.addEventListener('blur', validarCampo);
}


// funciones
function inicioApp() {
     // deshabilitar el envio
     btnEnviar.disabled = true;
}

function validarCampo() {
    
     // Se valida la longitud del texto y que no este vacio
     // el (this) es la forma dinámica de validar el campo
     validarLongitud(this);

     // Validar unicamente el email
     if(this.type === 'mail') {
          validarEmail(this);
     }
     
     let errores = document.querySelectorAll('.error');
     
     if(nombre.value !== '' && mail.value !== '' && telefono.value !== '' && consulta.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    } else {
        btnEnviar.disabled = true;
    }
}

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {

     if(campo.value.length > 0 ) {
          campo.classList.remove('error');
          campo.classList.remove('Contacto-boton-error');
          campo.classList.remove('Contacto-boton-textarea-error');
     } else {
          campo.classList.add('error');
          campo.classList.add('Contacto-boton-error');
          campo.classList.add('Contacto-boton-textarea-error');
     }
}

function validarEmail(campo) {
     const email = campo.value;
     
     // chequeo si existe un arroba para comfirmar el mail
     // si es true me devuelve 0 y si el false -1 (si no es igual a -1, la encontró)
     if(email.indexOf('@') !== -1 ) {
          // y me borre la clase "error"
          campo.classList.remove('error');
          campo.classList.add('Contacto-boton-error');
          
     } else {
          // y me habilite la clase "error"
          campo.classList.add('error');
          campo.classList.add('Contacto-boton-error');
     }
}