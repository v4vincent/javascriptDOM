let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

div1.addEventListener("click", function(){ alert("Capture 1"); }, true);
div2.addEventListener("click", function(){ alert("Capture 2"); }, true);
div3.addEventListener("click", function(){ alert("Capture 3"); }, true);

div1.addEventListener("click", function(){ alert("Bubble 1"); });
div3.addEventListener("click", function(){ alert("Bubble 3"); });