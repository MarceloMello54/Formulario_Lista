function adicionar(produto) {

    //declaração de variavel
    var produto = prompt("Informe nome do Produto para inserir na lista");
    //estrutura de condição (se- senão)
    if ((produto == null) || (produto == "")) {
        alert("Não digitou, vou fechar...");
    }
    else {
        var item = document.getElementById("itens");
        //cria um elemento "option" para  ser adicionado a lista
        var opcao = document.createElement("option");

        opcao.text = produto;
        item.add(opcao, item[0]);
    }
}

// função para remover um item da lista 
function remover(){

    // selecionar itens a lista e incluir um vetor 
    var selecao = document.getElementById("itens");

    //verificar se o usuario selecionou um item
    if(selecao.selectedIndex == -1){
        alert("Selecione um item na lista");
    }
    // obtem o indice do elemento selecionado na lista 
    var indice = selecao.options[selecao.selectedIndex].index;

    //obtem o nome do item selecionado na lista 
    var nome = selecao.options[selecao.selectedIndex].text;

    //cx de dialogo para confirmar a exclusao do item selecionado 
    var condicao = confirm("Deseja Excluir o produto "+ nome +" ?");

    //estrutura condicional (SE) para efetuar ou não a exclusao 
    
    if(condicao == true){
        selecao.remove([indice]);
        alert("O produto " + nome + " sera excluido da Lista!");
    }
else{
    alert("Voce desistiu de excluir "+ nome);
}
}
