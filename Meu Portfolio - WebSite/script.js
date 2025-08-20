const comentario = document.getElementById("comentario");
const botaoEnviarComentario = document.getElementById("botao-enviar-comentario")
const listaDeComentarios = document.getElementById("lista-de-comentarios")
const com = document.getElementById("comentarios")
let array = {};

if(localStorage.getItem("comentarios") !== null){
    array = JSON.parse(localStorage.getItem("comentarios"))
}
if(listaDeComentarios){
    for(const chave in array){
        const novoItem = document.createElement("li")
        const novaDiv = document.createElement("div")
        const novoComentario = document.createElement("p")
        const data = document.createElement("p")

        novoComentario.innerText = chave;
        data.innerText = array[chave];
        
        novaDiv.appendChild(data)
        novaDiv.appendChild(novoComentario)
        novoItem.appendChild(novaDiv)
        listaDeComentarios.appendChild(novoItem);
    }
}


if (botaoEnviarComentario){
    botaoEnviarComentario.addEventListener('click', ()=>{
    array[comentario.value] = new Date();
    localStorage.setItem("comentarios",JSON.stringify(array))
    document.getElementById("comentario").value = "";
    })
}


