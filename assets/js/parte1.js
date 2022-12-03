function toggleBorder() {
    // Inicializa variable de elemento imagen
    const $img = document.querySelector("img");
    // Comprueba existencia (true o false) de clase 'redBorder' en elemento 
    const isRedBorder = $img.classList.contains("redBorder");

    if (isRedBorder) {
        $img.classList.remove("redBorder");
    } else {
        $img.classList.add("redBorder");
    }

}