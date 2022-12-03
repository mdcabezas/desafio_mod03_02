// Inicializa variables de elementos selects
const $firstDigit = document.querySelector("#firstDigit");
const $secondDigit = document.querySelector("#secondDigit");
const $thirdDigit = document.querySelector("#thirdDigit");
const $displayMsg = document.querySelector("#displayMsg");

function checkPassword() {
    // Inicializa variables de "valores" en elemento Select
    const firstDigit = Number($firstDigit.value);
    const secondDigit = Number($secondDigit.value);
    const thirdDigit = Number($thirdDigit.value);

    if (firstDigit === 9 && secondDigit === 1 && thirdDigit === 1) {
        $displayMsg.innerHTML = "Password <b>1</b> correcto";
    }
    else if (firstDigit === 7 && secondDigit === 1 && thirdDigit === 4) {
        $displayMsg.innerHTML = "Password <b>2</b> correcto";
    } else {
        $displayMsg.innerHTML = "Password <b>incorrecto</b>";
    }

}
