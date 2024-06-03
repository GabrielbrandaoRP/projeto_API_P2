function preencherTabela(mensagens) {
    var tabela = document.getElementById('corpo-tabela');

    mensagens.forEach(function(mensagem) {
        var novaLinha = tabela.insertRow();

        var celulaNome = novaLinha.insertCell(0);
        celulaNome.textContent = mensagem.nome;

        var celulaEmail = novaLinha.insertCell(1);
        celulaEmail.textContent = mensagem.email;

        var celulaMensagem = novaLinha.insertCell(2);
        celulaMensagem.textContent = mensagem.mensagem;
    });
}
// Chamada da função para obter mensagens e preencher a tabela - CHATGPT também.
obterMensagens()
.then(function(mensagens) {
    preencherTabela(mensagens);
})
.catch(function(error) {
    console.error(error);
});