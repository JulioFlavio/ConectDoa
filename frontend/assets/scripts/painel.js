function verificaLogin() {
  if (!localStorage.getItem('usuario')) {
    window.location.href = 'login.html'
  }
}

verificaLogin()

async function substituiDados() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  document.getElementById("infoUser").innerHTML = `
  <h3>${usuario.Nome}</h3>
  <p> Obrigado por fazer parte do projeto ConectaDoa!</p>
  `
}

substituiDados()