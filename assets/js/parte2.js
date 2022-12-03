// Inicializa variables de elementos input
const $inputjs = document.querySelector("#inputjs");
const $inputnode = document.querySelector("#inputnode");
const $inputreact = document.querySelector("#inputreact");
const $displaytotal = document.querySelector("#displaytotal");

function countStickers() {
    // Suma valores ingresados
    const total = Number($inputjs.value) + Number($inputnode.value) + Number($inputreact.value);

    if (total > 10) {
        $displaytotal.innerHTML = "Llevas demasiados stickers";
    } else {
        $displaytotal.innerHTML = `Llevas <b>${total}</b> stickers`;
    }
}