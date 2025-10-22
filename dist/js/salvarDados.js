import { mostrarModal, limparCampos } from "./utils.js";

// Funçaõ para salvar os dados no Storage do Browser
// Recebe como parâmetro o evento do formulário
export function salvarDados(event){
    // Cancelar o envio do formulário
    event.preventDefault();

    // Recuperar os dados
    const nome = document.querySelector('#nome').value;
    const cep = document.querySelector('#cep').value;
    const numero = document.querySelector('#numero').value;
    const complemento = document.querySelector('#complemento').value;
    const bairro = document.querySelector('#bairro').value;
    const cidade = document.querySelector('#cidade').value;
    const estado = document.querySelector('#uf').value;
    const logradouro = document.querySelector('#logradouro').value;

    // colocando os dados em um array
    const usuario = [
        nome, cep, logradouro, numero, complemento, bairro, cidade, estado
    ]

    // colocar as informações, ele existe em qualquer browser
    // Permite o armazenamento apenas de STRINGS
    // Limite de 5mb por aplicação
    // localStorage, getItem = buscar o valor definido no array usuarios(NO BROWSER)
    // não existidndo = retorno null
    // JSON.parse converte essa string JSON em um objeto js (array)

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    // Inserindo no objeto do localstorage o array 
    usuarios.push(usuario)

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    // chama a modal par dizer que os dados fora salvos = limpar campos
    mostrarModal("Dados salvo com suceeso")
    limparCampos();

}