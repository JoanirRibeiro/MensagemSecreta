
function exibirAlerta() {
    const mensagemSecreta = "Como não conseguiu as respostas, o aluno removeu o arquivo do servidor para depois trocá-lo com o professor";
    const elemento = document.querySelector(".texto");
    elemento.classList.add("texto-secreto");
    elemento.innerHTML = mensagemSecreta;
    document.querySelector("button").classList.add("remove");
}
