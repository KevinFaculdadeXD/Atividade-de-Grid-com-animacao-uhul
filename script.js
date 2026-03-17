const audio = document.getElementById("musica");
const item4 = document.getElementById("musga");

item4.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
});

const botao = document.getElementById("temaBtn");

botao.addEventListener("click", () => {
    document.body.classList.toggle("tema2");
});