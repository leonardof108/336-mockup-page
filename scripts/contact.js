document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!firstName || !lastName || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
