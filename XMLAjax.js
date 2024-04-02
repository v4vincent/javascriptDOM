function getForecast() {
    let zipcode = document.getElementById("zip").value;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.open("GET", "https://wp.zybooks.com/weather.php?zip=" + zipcode);
    xhr.responseType = "json";
    xhr.send();
}

function responseReceivedHandler() {
    if (this.status !== 200) {
        alert("Error making HTTP request");
    }
    let html = "";
    if (this.response.success) {
        html += "<h1>Forecast</h1>";
        html += "<ol>";
        for (let day of this.response.forecast) {
            html += `<li>${day.desc}: high is ${day.high}, low is ${day.low}</li>`;
        }
        html += "</ol>";
    }
    else {
        html = `<h1>Error: ${this.response.error}</h1>`;
    }
    document.getElementById("forecast").innerHTML = html;
}

document.getElementById("search").addEventListener("click", getForecast);


function getForecast2(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://wp.zybooks.com/todos.php?day=Monday");
    xhr.responseType = "json";
    xhr.send();

    // let html2 = "";;
    let html2 = "<li>${day}</li>";




}

document.getElementById("search2").addEventListener("click", getForecast2)