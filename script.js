
const pratos = Array.from(document.querySelectorAll('.item'));


function pratoSelecionado(elemento) {
    const SelAnterior = elemento.parentNode.querySelector(".selecionado")
    
    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    quantosEscolhidos();
    
}

function bebidaSelecionada(elemento) {
    const SelAnterior = elemento.parentNode.querySelector(".selecionado")

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
    quantosEscolhidos();
}

function sobremesaSelecionada(elemento) {
    const SelAnterior = elemento.parentNode.querySelector(".selecionado")

    if (SelAnterior !== null) {
        SelAnterior.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
    quantosEscolhidos();
}


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

function mudaBotao() {
    const botãopedido = document.querySelector('.selecione');

    botãopedido.classList.add('verde');
    botãopedido.innerHTML = 'Fechar o pedido';
}


