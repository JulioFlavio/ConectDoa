const form = document.getElementById('formCadastro');
const tipoPessoa = document.getElementById('tipoPessoa');
const camposPF = document.getElementById('camposPF');
const camposPJ = document.getElementById('camposPJ');

// Função para alternar campos
function alternarCampos() {
    if(tipoPessoa.value === 'cpf') {
    camposPF.style.display = 'block';
    camposPJ.style.display = 'none';

    // Ajustar obrigatoriedade dos campos
    camposPF.querySelectorAll('input').forEach(i => i.required = true);
    camposPJ.querySelectorAll('input').forEach(i => i.required = false);
    } else {
    camposPF.style.display = 'none';
    camposPJ.style.display = 'block';

    camposPF.querySelectorAll('input').forEach(i => i.required = false);
    camposPJ.querySelectorAll('input').forEach(i => i.required = true);
    }
}

// Executar ao mudar o select
tipoPessoa.addEventListener('change', alternarCampos);

// Inicializar
alternarCampos();

// Validação senha
form.addEventListener('submit', function(event) {
    const senha = form.senha.value;
    const confirmarSenha = form.confirmarSenha.value;

    if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    event.preventDefault();
    return false;
    }

    if (!form.checkValidity()) {
    form.reportValidity();
    event.preventDefault();
    return false;
    }
});

/////////////////////////////////////////////////////


document.getElementById('formCadastro').addEventListener('submit', async (e) => {
  e.preventDefault();
  const tipoCadastro = document.getElementById('tipoPessoa').value;
  const CPF = document.getElementById('CPF').value;
  const nome = document.getElementById('nomeCompleto').value;
  const idade = document.getElementById('idade').value;
  const usuario = document.getElementById('usuario').value;
  const endereco = document.getElementById('endereco').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const CNPJ = document.getElementById('CNPJ').value;
  const nomeEmpresa = document.getElementById('nomeEmpresa').value;
  const telefone = document.getElementById("telefone").value;
  const descricao = document.getElementById('descricao').value;


  if (tipoCadastro == 'cpf') {

    const dados = {
      CPF: CPF,
      Nome: nome,
      Idade: idade,
      NomeUsuario: usuario,
      Endereco: endereco,
      Email: email,
      Senha: senha
    };
    
    const resposta = await fetch('http://localhost:3000/usuarios/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();
    console.log(resultado);
    if (resultado.message == "Usuário cadastrado com sucesso!"){
      Swal.fire({
        title: "Usuário cadastrado!",
        html: `Tente fazer <a href="login.html">login</a>.`,
        icon: "success"
      }).then ((result) => {location.reload()})
    } else {
      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um erro ao cadastrar o usuário, tente novamente.",
        icon: "error"
      });
    }

  } 
  else {

      const dados = {
        IDEmpresa: 34567,
        CNPJ: CNPJ,
        Nome: nomeEmpresa,
        // Voce tem que pegar os valores do campo "name"
        Email: email,
        Telefone: telefone,
        Descricao: descricao,
        fk_Administrador_IDAdmin: 1
      };
      
      const resposta = await fetch('http://localhost:3000/empresas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });

      const resultado = await resposta.json();
      console.log(resultado);
      if (resultado.message == "Empresa cadastrada com sucesso!"){
        Swal.fire({
          title: "Empresa cadastrada!",
          icon: "success"
        }).then ((result) => {location.reload()})
      } else {
        Swal.fire({
          title: "Erro!",
          text: "Ocorreu um erro ao cadastrar a empresa, tente novamente.",
          icon: "error"
        });
      }

  }

});