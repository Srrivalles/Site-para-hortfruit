const contatoInputEnviar = document.getElementsByClassName('contatoInputEnviar')
const contatoInputNome = document.getElementsByClassName('contatoInputNome')
const contatoInputComentario = document.getElementsByClassName('contatoInputComentario')
const contatoDivComentario = document.getElementsByClassName('contatoDivComentario')
const contatoDivComentarioNome = document.getElementsByClassName('contatoDivComentarioNome')
const contatoDivComentarioComentario = document.getElementsByClassName('contatoDivComentarioComentario')




contatoInputEnviar[0].addEventListener('click', () => {

    if (contatoInputNome[0].value == '' && contatoInputComentario[0].value == ''){
        alert('Escreva um comentário e seu nome.')
    }else{
        let nome = contatoInputNome[0].value
        let comentario = contatoInputComentario[0].value
        //
        contatoDivComentario[0].innerHTML += `  <h4 class="contatoDivComentarioNome">${nome}</h4>
                                                <p class="contatoDivComentarioComentario">${comentario}</p>
                                                    `
        contatoInputNome[0].value = '';                                                
        contatoInputComentario[0].value = '';
    }
})

