document.addEventListener('DOMContentLoaded', cargarImagenes);
const inputNode = document.querySelector('input');
const buttonNode = document.querySelector('button');
const divNode = document.querySelector('div');

buttonNode.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputNode.value.trim() === '') {
        alert('Ingrese una URL válida');
        inputNode.value = '';
        return;
    }

    const imgURL = inputNode.value;
    agregarImagen(imgURL);
    actualizarLocalStorage();
    inputNode.value = '';
});

divNode.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.remove();
        actualizarLocalStorage();
    }
});

function cargarImagenes() {
    const imagenes = JSON.parse(localStorage.getItem('imagenes')) || [];
    imagenes.forEach(agregarImagen);
}

function agregarImagen(url) {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    divNode.appendChild(imgElement);
}

function actualizarLocalStorage() {
    const imagenes = Array.from(divNode.querySelectorAll('img')).map(img => img.src);
    localStorage.setItem('imagenes', JSON.stringify(imagenes));
}