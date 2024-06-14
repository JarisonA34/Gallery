const inputNode = document.querySelector('input');
const buttonNode = document.querySelector('button');
const divNode = document.querySelector('div');
let imgURL = '';

buttonNode.addEventListener('click', (e) => {
    e.preventDefault();
    imgURL = `<img src="${inputNode.value}">`
    console.log(imgURL);
    divNode.innerHTML += imgURL;
    inputNode.value = ' ';
});