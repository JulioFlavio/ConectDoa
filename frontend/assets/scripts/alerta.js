function verificaLogin() {
  if (!localStorage.getItem('usuario')) {
    window.location.href = 'login.html'
  }
}

verificaLogin()

async function substituiDados() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  document.getElementById("nome").textContent = usuario.Nome;
}

substituiDados()