async function substituiDados(params) {
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  document.getElementById("infoUser").innerHTML = `
  <h3>${usuario.nome}</h3>
  <p> Obrigado por fazer parte do projeto ConectaDoa!</p>
  `
}

substituiDados()