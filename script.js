let PratoNome;
let PratoPreco;
let BebidaNome;
let BebidaPreco;
let SobremesaNome;
let SobremesaPreco;
let total;

//const geral para lista com todos os pratos
const pratos = Array.from(document.querySelectorAll('.item'));

//função dos pratos, para colocar borda verde ao selecionar, tirar ao selecionar outro, também para identificar preço

function pratoSelecionado(elemento, preco) {
    const SelAnterior = elemento.parentNode.querySelector(".selecionado")
    
    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    quantosEscolhidos();
    
    PratoNome = document.querySelector(".prato .selecionado h1").innerHTML;
  PratoPreco = preco;
}

//função das bebidas
function bebidaSelecionada(elemento, preco) {
    const SelAnterior = elemento.parentNode.querySelector(".selecionado")

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
    quantosEscolhidos();

    BebidaNome = document.querySelector(".bebida .selecionado h1").innerHTML;
  BebidaPreco = preco;
  
}

//função das sobremesas
function sobremesaSelecionada(elemento, preco) {
    const SelAnterior = elemento.parentNode.querySelector(".selecionado")

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
    quantosEscolhidos();

    SobremesaNome = document.querySelector(".sobremesa .selecionado h1").innerHTML;
  SobremesaPreco = preco;
  
}

//função para dizer se 3 itens foram selecionados e mudar o botão final
function quantosEscolhidos (){
    let pratosSelecionados = 0; 
    for(let numeroDoPrato in pratos) {
        if(pratos[numeroDoPrato].classList.contains('selecionado')) {
            pratosSelecionados = pratosSelecionados + 1;
        }
    }
    
    if(pratosSelecionados === 3) {
        mudaBotao();
    }
}

//função que muda o botão de fechar pedido

function mudaBotao() {
    const botãopedido = document.querySelector('.selecione');

    botãopedido.classList.add('verde');
    botãopedido.innerHTML = 'Fechar o pedido';
}

function finalizar(botao){
    

    if (botao.classList.contains('verde')) {
    total = PratoPreco + BebidaPreco + SobremesaPreco;

    let mensagem = `Olá, gostaria de fazer o pedido: 
    - Prato:  ${PratoNome}
    - Bebida: ${BebidaNome} 
    - Sobremesa: ${SobremesaNome} 
    Total: R$ ${total.toFixed(2)}`;

    mensagem = encodeURIComponent(mensagem);
    let finalizado = `https://wa.me/5511973113330/?text=${mensagem}`;
    window.open(finalizado)
    }
}

