const btnPounds = document.querySelector("#pounds");
const btnGrams = document.querySelector("#grams");
const btnTonne = document.querySelector("#tonne");
const btnReset = document.querySelector("#reset");
const inputFld = document.querySelector("#inputField");
let num = document.querySelector("#num")

btnPounds.addEventListener('click', function () {
    if (inputFld.value === '') {
        err()
    } else {
        remErr()
        x = parseInt(inputFld.value);
        x = x * 2.205;
        num.textContent = x + " Pounds";
    }
})

btnGrams.addEventListener('click', function () {
    if (inputFld.value === '') {
        err()
    } else {
        remErr()
        x = parseInt(inputFld.value);
        x = x * 1000;
        num.textContent = x + " Grams";
    }
})

btnTonne.addEventListener('click', function () {
    if (inputFld.value === '') {
        err()
    } else {
        remErr()
        x = parseInt(inputFld.value);
        x = x / 1000;
        num.textContent = x + " Tons";
    }
})

btnReset.addEventListener('click', function () {
    inputFld.value = ''
    num.textContent = ''
    remErr()
})


function err() {
    inputFld.classList.add("err")
    num.textContent = "Add a number"
    num.classList.add("col")
}

function remErr() {
    inputFld.classList.remove("err")
    num.classList.remove("col")
}