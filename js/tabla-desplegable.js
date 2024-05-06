// Obtener todas las filas que son clickeables
const filasClickable = document.querySelectorAll('.fila-clickable');

// Iterar sobre cada fila clickeable
filasClickable.forEach(fila => {
    // Agregar un listener de clic a cada fila
    fila.addEventListener('click', () => {
        // Encontrar la fila desplegable correspondiente
        const filaDesplegable = fila.nextElementSibling;
        // Alternar la visibilidad de la fila desplegable
        filaDesplegable.style.display = filaDesplegable.style.display === 'table-row' ? 'none' : 'table-row';
    });
});