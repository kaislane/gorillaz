let container = document.querySelector('.menu-albumes');
let img = container.querySelector('.img-hover');

document.body.onmousemove = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    img.style.top = y + 'px';
    img.style.left = x + 'px';
}

container.querySelectorAll('.album').forEach(text => {
    text.onmousemove = () => {
        img.src = text.getAttribute('data-src');
    }
});

// Además, quiero cambiar el color de fondo de los álbumes al hacer hover

// Seleccionar la lista específica por su ID
const lista = document.getElementById('lista-albumes');

// Obtener todos los elementos de lista dentro de la lista seleccionada
const listItems = lista.querySelectorAll('li');

// Iterar sobre cada elemento de lista
listItems.forEach((item) => {
    // Al hacer hover, cambiar el color de fondo al color definido en el atributo data-color
    item.addEventListener('mouseenter', () => {
        const color = item.getAttribute('data-color');
        item.style.backgroundColor = color;
    });
    // Al salir del hover, restaurar el color de fondo original
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
    });
});
