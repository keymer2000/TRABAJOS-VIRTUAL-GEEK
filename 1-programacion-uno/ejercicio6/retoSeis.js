/*
let titulo = document.createElement("h1");
let imagen = document.createElement("img");
let parrafo = document.createElement("p");
parrafo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
imagen.src="http://via.placeholder.com/350x150";
titulo.innerHTML = "Lorem ipsum";   
document.querySelector("div").appendChild(titulo);
document.querySelector("div").appendChild(imagen);
document.querySelector("div").appendChild(parrafo);

*/


const listElement = document.querySelector('div');

const content = '<div><h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150" alt="imagen"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p></div>';

listElement.innerHTML = content;