console.log(document.documentElement);

console.log(document.documentElement.children[1].children[1]);

console.log(document.documentElement.children[1].parentNode);

console.log(document.getElementById("item-2").previousElementSibling);

console.log(document.getElementById("item-2").parentNode);

console.log(document.querySelector("ul").childNodes);

ol = document.getElementsByTagName("ol")[0];
li = document.getElementById("one");
ol.appendChild(li);

insertOl = document.getElementsByTagName("ol")[0];
items = insertOl.getElementsByTagName("li");
insertOl.insertBefore(items[0], items[3]);

removingChild = document.getElementById("item-1");
removingChild.parentNode.removeChild(removingChild);

