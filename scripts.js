function mostrarAlerta() {
    alert('¡Hola! Has hecho clic en el botón.');
}
function abrirMenu() {
    document.getElementById("sidebar").style.width = "250px";
}

function cerrarMenu() {
    document.getElementById("sidebar").style.width = "0";
}

// lastScrollY = 0
// window.addEventListener('scroll', function() {
//     const currentScrollY = window.scrollY;
//     const logo = document.getElementById('logo');

//     if (currentScrollY > lastScrollY) {
//         // Scroll down
//         logo.style.transform = `translateY(${currentScrollY}px)`;
//     } else {
//         // Scroll up
//         logo.style.transform = 'translateY()';
//     }

//     lastScrollY = currentScrollY;
// });