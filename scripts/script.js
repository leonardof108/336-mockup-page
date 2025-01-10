const HEADER = document.querySelector("#header");
const FOOTER = document.querySelector("#footer");

function generateHeader() {
  const CURRENT_PATH = window.location.pathname;
  const IS_HOME = CURRENT_PATH === "./" || CURRENT_PATH === "./index";
  const IS_MENU = CURRENT_PATH === "./pages/menu";
  const IS_CONTACT = CURRENT_PATH === "./pages/contact";

  const HEADER_CONTENT = `
    <nav class="navbar navbar-expand-lg navbar-dark py-3 navbar-transparent">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="/">
          <img src="./images/logo.jpg" alt="Logo" id="image_logo" width="50" height="50" class="rounded-circle">
          <span class="ms-2 text-white roboto-regular">336 Hamburgueria</span>
        </a>
        <button class="navbar-toggler" type="button" onclick="openNav()">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link ${
                IS_HOME ? "active" : ""
              } bebas-neue-regular" href="./index">Página Inicial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${
                IS_MENU ? "active" : ""
              } bebas-neue-regular" href="./pages/menu">Cardápio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${
                IS_CONTACT ? "active" : ""
              } bebas-neue-regular" href="./pages/contact">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="mySidenav" class="side-nav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="./index" class="bebas-neue-regular ${
        IS_HOME ? "active" : ""
      }">Página Inicial</a>
      <a href="/.pages/menu" class="bebas-neue-regular ${
        IS_MENU ? "active" : ""
      }">Cardápio</a>
      <a href="./pages/contact" class="bebas-neue-regular ${
        IS_CONTACT ? "active" : ""
      }">Contato</a>
    </div>
  `;
  HEADER.innerHTML = HEADER_CONTENT;
}

function generateFooter() {
  const FOOTER_CONTENT = `
  <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-lg-3 col-md-12 mb-3">
      <h5 class="text-white text-center">Entre em contato</h5>
          <p class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
</svg> Av. do Forte, 342 - Vila Ipiranga, Porto Alegre - RS, 91360-000</p>
          <p class="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> Telefone: (51) 98348-5210</p>
      </div>
      <div class="col-lg-3 col-md-12 offset-lg-1 mb-3">
        <h5 class="text-white text-center">Nos encontre no Google Maps</h5>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.013379236138138!2d-48.54248789053286!3d-27.59202123937306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952744e405f55557%3A0x370503dd957f67a9!2s336%20Hamburgueria!5e0!3m2!1sen!2sbr!4v1671303285669!5m2!1sen!2sbr" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>

      <div class="col-lg-4 col-md-12 offset-lg-1 mb-3">
        <form>
          <h5 class="text-center">Assine nossa Newsletter</h5>
          <p>Fique por dentro das nossas atualizações e descontos.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Endereço de email">
            <button class="btn btn-warning" type="button">Assinar</button>
          </div>
        </form>
        <h5 class="mt-5">Encontrou algum problema?</h5>
        <button type="button" class="btn btn-danger mt-2" data-bs-toggle="modal" data-bs-target="#bugReportModal">
            Reportar
          </button>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2025 Leonardo Ferreira. Todos os direitos reservados.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis text-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis text-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis text-white" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></a></li>
      </ul>
    </div>
  </footer>
</div>

    <!-- Bug Report Modal -->
    <div class="modal fade" id="bugReportModal" tabindex="-1" aria-labelledby="bugReportModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content" style="background-color: #343a40; color: #fff;"> <!-- Dark background for modal -->
          <div class="modal-header">
            <h5 class="modal-title" id="bugReportModalLabel">Reportar um Problema</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="bugTitle" class="form-label">Título do Problema</label>
                <input type="text" class="form-control" id="bugTitle" required>
              </div>
              <div class="mb-3">
                <label for="bugDescription" class="form-label">Descrição</label>
                <textarea class="form-control" id="bugDescription" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-warning">Enviar Relatório</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  FOOTER.innerHTML = FOOTER_CONTENT;

  FOOTER.style.backgroundColor = "#2b2b2b";
  FOOTER.style.color = "#ffffff";
  FOOTER.querySelectorAll("h5, p").forEach((el) => {
    el.style.color = "#ffffff";
  });
}

function handleNavbarTransparency() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.remove("navbar-transparent");
      navbar.classList.add("navbar-solid");
    } else {
      navbar.classList.remove("navbar-solid");
      navbar.classList.add("navbar-transparent");
    }
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function createBackToTopButton() {
  const button = document.createElement("button");
  button.id = "backToTop";
  button.innerHTML = "↑";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.display = "none";
  button.style.backgroundColor = "#343a40";
  button.style.color = "#ffffff";
  button.style.border = "none";
  button.style.padding = "10px 15px";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.zIndex = "1000";
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
}

generateHeader();
generateFooter();
handleNavbarTransparency();
createBackToTopButton();
