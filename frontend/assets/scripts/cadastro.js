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



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formCadastro');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nomeCompleto = document.getElementById('nome').value;
      const cpf = document.getElementById('CPF').value;
      const idade = document.getElementById('idade').value;
      const usuario = document.getElementById('usuario').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const confirmarSenha = document.getElementById('confirmarSenha').value;

      try {
        const response = await fetch('http://localhost:3000/usuarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, email, senha })
        });

        if (response.ok) {
          alert('Usuário cadastrado com sucesso!');
          form.reset();
        } else {
          alert('Erro ao cadastrar usuário.');
        }
      } catch (error) {
        alert('Erro na requisição: ' + error.message);
      }
    });
  }
});
