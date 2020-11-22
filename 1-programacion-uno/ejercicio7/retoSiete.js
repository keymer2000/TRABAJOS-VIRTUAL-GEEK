/*

let lista1 = document.createElement("li");
let lista2 = document.createElement("li");
let lista3 = document.createElement("li");

lista1.innerHTML = "1"
lista2.innerHTML = "2"
lista3.innerHTML = "3"

document.querySelector("ul").appendChild(lista1);
document.querySelector("ul").appendChild(lista2);
document.querySelector("ul").appendChild(lista3);

este codigo da el mismo resultado pero con muchas mas lineas de codigo
*/

const listElement = document.querySelector('ul');

        const content = '<li>1</li><li>2</li><li>3</li>';

        listElement.innerHTML = content;