// Função para normalização do CEP  - ela será usada quando formos buscar o CEP
// Remove tudo aquilo que não é número- deixar fixo em 8 caracteres
export function limparCep(valor) {
  return valor.replace(/\D/g, "").slice(0, 8);
}

// Função para montar o modal
export function mostrarModal(mensagem) {
  // recuper a modal no HTML
  const modal = document.querySelector("#alertModal");

  //recuper o elemento p que receberá as mensagens
  const mensagemElemento = document.querySelector("#alertMessage");

  // atualizar as mensagens quando o usuário cometer algum erro
  mensagemElemento.textContent = mensagem;

  // fazendo a exibição da modal
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  // criando a função de tempo para fazer o efeito de opacidade
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modal.classList.add("opacity-100");
  }, 50);

  // evento do botão da modal para o seu fechamento
  const fecharBtn = document.querySelector('#fecharModal');
  fecharBtn.onclick = () => {
    modal.classList.add("opacity-0"); //deixando no padrão do HTML - volta ao original
    modal.classList.remove("opacity-100"); //deixando no padrão do HTML
    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }, 300);
  };
}

// função para limpar todos os campos do formulário
export function limparCampos() {
    // pegar o formulário
    const form = document.querySelector('#enderecoForm');
    //para limpar vamos percorrer o form com um forEach para cada input
    form.querySelectorAll('input').forEach(input => input.value = '');
}

// função para a máscara no CEP
export function aplicarMascaraCep(inputElement){
  //estamos pegando o que foi digitado ou colado no campo de texto
  //como é uma entrada, essa função será executada para cada número digitado
  inputElement.addEventListener('input', (e) =>{

    // vamos usar o parametro 'e' como target ==> cada um dos números digitados
    let value = e.target.value.replace(/\D/g, "");

    if(value.length > 5){
      value = value.slice(0, 5) + '-' + value.slice(5, 8);      
    }
    // vamos atualizar a visualização do elemento html(input), já no formato de CEP
    e.target.value = value;    
  });
}
