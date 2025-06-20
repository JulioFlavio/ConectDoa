document.addEventListener("DOMContentLoaded", () => {
  const entrarBtn = document.getElementById("entrarBtn");
  const contadorEl = document.getElementById("contador");

  // Redireciona para a página de login
  entrarBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  // Animação de contador
  let count = 0;
  const meta = 57;
  const intervalo = setInterval(() => {
    if (count < meta) {
      count++;
      contadorEl.textContent = count;
    } else {
      clearInterval(intervalo);
    }
  }, 80);
});
