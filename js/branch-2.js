/* var foto1 = document.querySelector('.pic_1');
const subTitulo = document.querySelector('.para');
foto1.addEventListener('mousedown', () => {
    titulo = document.querySelector('h1');
    titulo.textContent = "2024";

    subTitulo.innerText = "Sedução em tons de cinzento";
    // subTitulo.appendChild(subTitulo);
})

foto1.addEventListener('mouseout', () => {
    titulo = document.querySelector('h1');
    titulo.textContent = "Trabalhos";
    subTitulo.innerText = "";
}) */

function aumenta(smallImg) {
    var fullImg = document.querySelector("#imgbox");
    fullImg.src = smallImg.src;
}

