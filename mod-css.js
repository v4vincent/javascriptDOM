

let h1 = document.getElementById("h1");

let h2 = document.getElementById("h2");

console.log(h1.style.getPropertyValue("color"));
console.log(h2.style.getPropertyValue("color"));

h1.style.setProperty("color", "green");

h2.style.removeProperty("color");
h1.style.backgroundColor = "teal";

document.styleSheets[0].cssRules[0].style.setProperty("color", "black");
console.log(document.styleSheets);

document.querySelector("#insertRuleBtn").addEventListener("click", insertRule);
document.querySelector("#changeRuleBtn").addEventListener("click", changeRule);
document.querySelector("#deleteRuleBtn").addEventListener("click", deleteRule);

function insertRule() {
    // Insert paragraph rule
    let stylesheet = document.styleSheets[0];
    stylesheet.insertRule("p { color: blue; }");

    // Insert .price rule
    stylesheet.insertRule(".price { font-weight: bold; }")

}

function changeRule() {
    // Change paragraph rule
    let stylesheet = document.styleSheets[0];
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].selectorText === "p") {
            let style = stylesheet.cssRules[i].style;
            style.setProperty("color", "red");
        }
    }

    // Change .price rule
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].selectorText === ".price") {
            let style = stylesheet.cssRules[i].style;
            style.setProperty("font-style", "italic");
        }
    }

}

function deleteRule() {
    // Delete the paragraph rule
    let stylesheet = document.styleSheets[0];
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].selectorText === "p") {
            stylesheet.deleteRule(i);
        }
    }

    // Delete .price rule

    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].selectorText === ".price") {
            stylesheet.deleteRule(i);
        }
    }

}

console.log(document.styleSheets.length)
console.log(document.styleSheets[0].cssRules);
