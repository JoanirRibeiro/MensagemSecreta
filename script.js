
function exibirAlerta() {
    const mensagemSecreta = "Sua mensagem secreta aqui";
    const elemento = document.querySelector(".texto");
    elemento.classList.add("texto-secreto");
    elemento.innerHTML = mensagemSecreta;
    document.querySelector("button").classList.add("remove");
}
