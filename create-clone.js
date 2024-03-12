let createOrder = document.createElement("li");
let createText = document.createTextNode("Three");
createOrder.appendChild(createText);

document.querySelector("ol").appendChild(createOrder);


let itemNodes = document.querySelector("ul").querySelectorAll("li");
let cloneNodes = itemNodes[0].cloneNode(true);

document.querySelector("ul").insertBefore(cloneNodes,itemNodes[1]);