// importando as funções que estão no utils e têm parâmetro
import { limparCep, mostrarModal } from "./utils.js"

// Função Principal para buscar o CEP = via API devemos usar o async
export async function buscarCep(){
    // Recuperando o campo do cep 
    const cepInput = document.querySelector('#cep');

    // Limpar o cep para tirar o traço e ficar apenas 
    const cep = limparCep(cepInput.value);

    // Verificar se temos 08 digítos
    if(cep.length === 8){
        try{
            // tentar executar esse bloco de comando
            // não funcionando ele irá executar o catch
            // chamando a api
            // o await faz o js esperar a promise do fetch ser resolvida
            // quando for resolvido ele armazena o valor na res
            // res não contém os dados - ele recebe um ojeto de resposta HTTP
            // res.ok - retorna true se a requisição deu certo
            // res.status - condição de resposta 404,(não localizado)
            // 200 (ok), 500(error server)
            // res.json() método para converter a resposta em JSON

            const res = await fetch (`http://viacep.com.br/ws/${cep}/json/`);

            // manipular o res.json
            // o método json lê o corpot da resposta e converte em texto
            // json para formato que o js consegue ler
            // como essa conversão também é assíncrona, usamos novamente o await
            // depois que termina a conversão, a const data passa a conter um objeto com os dados do cep 
            const data = await res.json();

            // verificar se a api não retornou o erro 
            if(!data.erro){
                // preencher os campos com os dados da API
                document.querySelector('#logradouro').value = data.logradouro;
                document.querySelector('#bairro').value = data.bairro;
                document.querySelector('#cidade').value = data.localidade;
                document.querySelector('#uf').value = data.uf;

                // dando foco no número
                document.querySelector('#numero').focus();
            } else {
                // Mostrar o alert caso o cep não seja encontrado
                mostrarModal("Cep não encontrado");
            }

        } catch (error) {
            // Mostra o erro caso a requisição falhe
            mostrarModal("Não foi possível buscar o CEP. Tente novamente.")
        }
    } else {
        // caso o número de difito seja menor que 8
        mostrarModal("Cep tem menos de 8 caractéres.Digite novamente");
        // foco no cep
        cepInput.focus()
    }
}