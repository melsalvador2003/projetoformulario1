// importação das funções
import { mostrarModal, aplicarMascaraCep } from "./utils.js";

//elementos básicos do DOM 
const buscarCepBtn = document.querySelector('#buscarCep'); //linha 30 do HTML
const enderecoForm = document.querySelector('#enderecoForm'); //linha 15 do HTML
const cepInput = document.querySelector('#cep'); //linha 28 do HTML
const mostrarDados = document.querySelector('#mostrarDados'); // linha 73 do HTML

//chamar a função de aplicar máscara
aplicarMascaraCep(cepInput);