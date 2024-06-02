function passwordGenerate(){
    
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$^&=_-";

    let usableChars = [];
    let password = "";

    usableChars += isLower.checked ? lowerChars : "";
    usableChars += isUpper.checked ? upperChars : "";
    usableChars += isNumber.checked ? numberChars : "";
    usableChars += isSymbols.checked ? symbolChars : "";
    

    for(let i = 0; i < lengthval.value ; i++){
        let randomValue = Math.floor(Math.random() * usableChars.length);
        password += usableChars[randomValue];
    }
    resultP.textContent = "Password: " + password;

}

let lengthval = document.getElementById("textbox");
let isLower = document.getElementById("Lowercase")
let isUpper = document.getElementById("Uppercase");
let isNumber = document.getElementById("Numbers")
let isSymbols = document.getElementById("Symbols")

let resultP = document.getElementById("result")

