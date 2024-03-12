

let inputs = document.querySelectorAll("input");

for (let i = 0; i <inputs.length; i++) {
    // inputs[i].style.border = "40px solid blue";

    inputs[i].addEventListener("input",function (){
        this.style.border = "40px solid green";
    });

    inputs[i].addEventListener("keydown", testHandler);

}

let click = document.querySelectorAll("button");
for (let i = 0; i < click.length; i++) {
    click[i].addEventListener("click", function () {
        this.style.border = "40px solid black";
    })
}

function testHandler(event){
    if (event.key === "Enter"){
        alert("Wassap, " + event.target.value + "!")
    }

}
