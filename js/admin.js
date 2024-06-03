function efetuarLogin(){
    let loginadm = {}
    const email = document.getElementById("emailInput")
    const senha = document.getElementById("senhaInput")
    loginadm.email = email.value
    loginadm.senha = senha.value
    validarUsuario(loginadm)
    }
    
    function validarUsuario(loginadm) {
      if (loginadm.email === "admin@admin.com" && loginadm.senha === "1234") {
        alert("Login correto");
        window.location.href = "messages.html"
      } else {
        alert("Login incorreto");
      }
    }