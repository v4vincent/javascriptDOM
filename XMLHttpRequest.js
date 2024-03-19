let movieinfo = document.getElementById("movieinfo");
let xhr = new XMLHttpRequest();
xhr.addEventListener("load", function() {
    movieinfo.innerHTML = xhr.response;
});
xhr.open("GET", "www.facebook.com");
xhr.send();