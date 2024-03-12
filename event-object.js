

window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler() {
    let textBox = document.querySelector("#name");
    textBox.addEventListener("keyup", keyupHandler);
}

function keyupHandler(event) {
    if (event.key === "Enter") {
        let textBox = event.target;
        alert("Hello, " + textBox.value + "!");
    }
}

