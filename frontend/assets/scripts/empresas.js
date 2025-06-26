async function substituiInstituicoes() {
  const response = await fetch('http://localhost:3000/empresas')
  const instituicoes = await response.json()
  
  document.getElementById("cards").innerHTML = ""
  instituicoes.forEach(empresa => {
    document.getElementById("cards").innerHTML += `
      <div class="card" data-tipo="Financeiro" data-local="Rio de Janeiro" data-categoria="Campanha de Mobilização">
        <h3>${empresa.Nome}</h3>
        <p><strong>Contato:</strong>${empresa.Telefone}</p>
        <p><strong>Descrição:</strong> ${empresa.Descricao}</p>
      </div>
    `
  });
}
substituiInstituicoes()