function enviarMensagem(){
    let mensagem = {}
    const nome = document.getElementById("nome")
    const email = document.getElementById("email")
    const msg = document.getElementById("msg")
    mensagem.nome = nome.value
    mensagem.email = email.value
    mensagem.mensagem = msg.value
    inserirMensagem(mensagem)
    alert("Mensagem enviada!")
  }