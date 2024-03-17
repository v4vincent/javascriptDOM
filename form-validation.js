document.querySelector("#submitBtn").addEventListener("click", submitBtnClick);


function isCreditCardLong(creditCard) {

    return creditCard.length >= 6 && /^\d+$/.test(creditCard);
}




function submitBtnClick(event){

    let myForm = document.querySelector("#myForm");

    myForm.cardNumber.style.backgroundColor = "LightGreen";



    let cardNumber = document.querySelector("#cardNumber").value;
    console.log(cardNumber);
    if (isCreditCardLong(cardNumber)){
        document.querySelector("#errorMsg").classList.add("hidden");
        // cardNumber.classList.remove("error-textbox");
    }
    else {
        document.querySelector("#errorMsg").classList.remove("hidden");
        myForm.cardNumber.style.backgroundColor = "Red";
        // cardNumber.classList.add("error-textbox");

    }
    let acceptTerm = document.querySelector("#acceptTerms");
    if (!acceptTerm.checked){
        event.preventDefault();
    }
}


document.querySelector("#submitBtn2").addEventListener("click", submitBtnClick2);

function submitBtnClick2() {

    let form2 = document.querySelector("#form2");
    form2.cardNumber2.style.backgroundColor = "Grey";
    form2.acceptTerms2.style.backgroundColor = "Grey";
    form2.zip.style.backgroundColor = "Grey";

    let cardNumber2 = document.querySelector("#cardNumber2").value;
    if (isNaN(cardNumber2)){
        form2.cardNumber2.style.backgroundColor = "Red";

    }

}

let zipCodeValid = false;
let zip = document.querySelector("#zip");
zip.addEventListener("input",checkZip);

function checkZip(){
    let form2 = document.querySelector("#form2");
    zipVal = zip.value;
    for (let i = 0; i < zipVal.length; i++) {
        if (isNaN(zipVal[i])){
            form2.zip.style.backgroundColor = "Red";
        }
    }
}
