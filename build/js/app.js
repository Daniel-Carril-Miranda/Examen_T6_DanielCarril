document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});
 
function iniciarApp() {
    navegacionFija();
 
    crearGaleria();
 
    scrollNav();
 
     // Obtener el elemento span por su ID
     let yearSpan = document.getElementById("year");
 
     // Obtener el año actual
     let currentYear = new Date().getFullYear();
     // Establecer el año actual en el contenido del span
     yearSpan.textContent = currentYear;
}

// Funcion crear galería:
function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
 
    for(let i = 1; i <= 12; i++ ) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.png" type="image/jpeg">
        <source srcset="build/img/thumb/${i}.jpg" type="image/webp">
        <img loading="lazy" width="200" height="200" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
        `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }
 
        galeria.appendChild(imagen);
    }
}  
 
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
    <source srcset="build/img/grande/${id}.png" type="image/jpeg">
    <source srcset="build/img/grande/${id}.jpg" type="image/jpeg">
    <source srcset="build/img/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
    `;
 
    // Crea el Overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
 
    // Boton para cerrar el Modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);
 
    // Añadirlo al HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

