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