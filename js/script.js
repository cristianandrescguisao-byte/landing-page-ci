document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnClick');
    if (boton) {
        boton.addEventListener('click', () => {
            alert('¡Validación JS funcionando correctamente! 🚀');
        });
    }
});