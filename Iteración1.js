// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
// const button$$ = document.createElement("button");
//     console.log(button$$);
// button$$.setAttribute("id", "btnToClick");
const buttonClick = document.querySelector(".btnToClick");
function evenToClick(event) {
    console.log(event);
    console.log("heloclick")
}
buttonClick.addEventListener('click' , evenToClick);



// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const selecFocus = document.querySelector(".focus");
function inputFocus(event) {

    console.log('hacemos focus y su valor', event.target.value);
}
selecFocus.addEventListener('focus', inputFocus);


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const selecInput = document.querySelector(".value");
selecInput.addEventListener('input' , function (event) {
    
    console.log('Valor del input', event.target.value);
});