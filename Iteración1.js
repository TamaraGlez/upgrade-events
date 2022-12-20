// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
// const button$$ = document.createElement("button");
//     console.log(button$$);
// button$$.setAttribute("id", "btnToClick");
const buttonClick = document.body.querySelector("#btnToClick");
addEventListener('click' , evenToClick);
function evenToClick(event) {
    console.log(event);
}


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const selecFocus = document.body.querySelector(".focus");
selecFocus.addEventListener('focus' , inputFocus);
function inputFocus(event) {
console.log(event.target.value);
}

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const selecInput = document.body.querySelector(".input");
selecInput.addEventListener('input' , function (event) {
    console.log(event.target.value);
});