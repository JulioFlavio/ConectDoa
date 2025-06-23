async function substituiInstituicoes() {
  const response = await fetch('http://localhost:3000/instituicoes')
  const instituicoes = await response.json()
  
  document.getElementById("cards").innerHTML = ""
  instituicoes.forEach(instituicao => {
    document.getElementById("cards").innerHTML += `
      <div class="card" data-tipo="Financeiro" data-local="Rio de Janeiro" data-categoria="Campanha de Mobilização">
        <img src="https://doacoes.criancaesperanca.unesco.org/static/img/criesp-BK-4.png" alt="${instituicao.nome}">
        <h3>${instituicao.nome}</h3>
        <p><strong>Cidade:</strong> Rio de Janeiro</p>
        <p><strong>Tipo:</strong> Financeiro</p>
        <p><strong>Categoria:</strong> Campanha de Mobilização</p>
        <a class="link-entrar" href="https://doacoes.criancaesperanca.unesco.org/" target="_blank">Saiba mais</a>
      </div>
    `
  });
}
substituiInstituicoes()