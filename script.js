function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function mostrarOcultarInfoAdicional() {
    const infoAdicional = document.getElementById('info-adicional');

    // Cambia el estado de visualización
    if (infoAdicional.style.display === 'none' || infoAdicional.style.display === '') {
        infoAdicional.style.display = 'block'; // Mostrar la sección
    } else {
        infoAdicional.style.display = 'none'; // Ocultar la sección
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;         // Para navegadores antiguos
    document.documentElement.scrollTop = 0;  // Para navegadores modernos
}

/*function mostrarOcultarInfoAdicional() {
    const infoAdicional = document.getElementById('info-adicional');
    const btnVolverArriba = document.getElementById('btn-volver-arriba');

    if (infoAdicional.style.display === 'none' || infoAdicional.style.display === '') {
        infoAdicional.style.display = 'block';
        btnVolverArriba.style.display = 'block';  // Mostrar el botón de volver arriba
    } else {
        infoAdicional.style.display = 'none';
        btnVolverArriba.style.display = 'none';  // Ocultar el botón de volver arriba
    }
}*/



