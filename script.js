// ========== SCRIPT PUBLICARTE APP ==========

// ========== FUNCIONES DE INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ PublicArte App cargada correctamente');
    inicializarRedes();
    agregarEventos();
});

// ========== INICIALIZAR REDES SOCIALES ==========
function inicializarRedes() {
    const redes = {
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/',
        tiktok: 'https://www.tiktok.com/',
        googleads: 'https://ads.google.com/'
    };

    // Guardar en localStorage para acceso global
    window.redesPublicarte = redes;
    console.log('✅ Redes sociales inicializadas');
}

// ========== AGREGAR EVENTOS A BOTONES ==========
function agregarEventos() {
    // Eventos para tarjetas de redes sociales
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            const nombreRed = this.textContent.trim().toLowerCase();
            manejarClickRed(nombreRed, e);
        });

        // Agregar efecto de presión
        card.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });

        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });

    console.log('✅ Eventos agregados a tarjetas');
}

// ========== MANEJAR CLICK EN REDES ==========
function manejarClickRed(nombreRed, evento) {
    evento.preventDefault();
    
    const redes = window.redesPublicarte;
    const urls = {
        'facebook': redes.facebook,
        'instagram': redes.instagram,
        'tiktok': redes.tiktok,
        'google ads': redes.googleads
    };

    const url = urls[nombreRed];

    if (url) {
        console.log(`🔗 Abriendo ${nombreRed}: ${url}`);
        window.open(url, '_blank');
    } else {
        console.warn(`⚠️ Red social no configurada: ${nombreRed}`);
        mostrarAlerta(`Red social no configurada: ${nombreRed}`);
    }
}

// ========== MOSTRAR ALERTAS ==========
function mostrarAlerta(mensaje) {
    alert(`⚠️ ${mensaje}\n\nPor favor, contacta con el administrador.`);
}

// ========== VALIDAR FORMULARIOS ==========
function validarFormulario(formulario) {
    const inputs = formulario.querySelectorAll('input, textarea');
    let esValido = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#ff6b6b';
            esValido = false;
        } else {
            input.style.borderColor = '#6a5acd';
        }
    });

    return esValido;
}

// ========== ENVIAR FORMULARIO ==========
function enviarFormulario(e) {
    e.preventDefault();
    
    const formulario = e.target;
    
    if (validarFormulario(formulario)) {
        console.log('✅ Formulario válido, enviando...');
        
        // Aquí iría la lógica para enviar por email o guardar en BD
        mostrarAlerta('¡Formulario enviado exitosamente! Nos contactaremos pronto.');
        
        // Limpiar formulario
        formulario.reset();
    } else {
        mostrarAlerta('Por favor, completa todos los campos.');
    }
}

// ========== CAMBIAR TEMA (BONUS) ==========
function cambiarTema(tema) {
    if (tema === 'oscuro') {
        document.body.style.backgroundColor = '#2d1b4e';
    } else if (tema === 'claro') {
        document.body.style.backgroundColor = '#6a5acd';
    }
    console.log(`🎨 Tema cambiado a: ${tema}`);
}

// ========== VALIDAR EMAIL ==========
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ========== FUNCIONES ÚTILES ==========
function mostrarCarga(elemento) {
    elemento.innerHTML = '<p style="color: #6a5acd;">Cargando...</p>';
}

function ocultarCarga(elemento) {
    elemento.innerHTML = '';
}

// ========== GUARDAR EN LOCALSTORAGE ==========
function guardarDato(clave, valor) {
    try {
        localStorage.setItem(clave, JSON.stringify(valor));
        console.log(`✅ Dato guardado: ${clave}`);
    } catch (error) {
        console.error('❌ Error al guardar:', error);
    }
}

// ========== OBTENER DE LOCALSTORAGE ==========
function obtenerDato(clave) {
    try {
        const dato = localStorage.getItem(clave);
        return dato ? JSON.parse(dato) : null;
    } catch (error) {
        console.error('❌ Error al obtener:', error);
        return null;
    }
}

// ========== CONSOLE LOG ESTILIZADO ==========
console.log('%c🎨 PublicArte App - Scripts cargados correctamente', 'color: #6a5acd; font-size: 16px; font-weight: bold;');
