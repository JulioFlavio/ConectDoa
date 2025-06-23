document.getElementById("formLogin").addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById("emailLogin").value
  const senha = document.getElementById("senhaLogin").value

  const dados = {
    email: email,
    senha: senha
  };

  // console.log(dados)

  const resposta = await fetch('http://localhost:3000/usuarios/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dados)
  });

  const resultado = await resposta.json();
  console.log(resultado)
  if (resultado.message == "Login bem-sucedido") {
    localStorage.setItem('usuario', JSON.stringify(resultado.usuario))
    window.location.href="painel.html"
  } else if(resultado.message == "Email ou senha incorretos") {
    Swal.fire({
      icon: "error",
      title: "Erro!",
      text: "Houve um erro ao fazer login, tente novamente!"
    })
  }
})