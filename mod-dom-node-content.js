let newP = document.querySelector("p");
newP.textContent = "This text is from JS";

let newOL = document.querySelector("ol");
newOL.innerHTML = "<li>Vincent</li><li>Nikki</li>";

document.getElementById("changeNode").firstChild.nodeValue = "changed by node";

let secP = document.querySelectorAll("p")[1];
secP.innerHTML = "    what are you     talking about";

