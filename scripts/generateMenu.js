const BURGER_CONTAINER = document.querySelector("#burger-container .row"); // Get the row inside the container

const MENU = [
  {
    burger: "Kids",
    description: "Hambúrguer de costela (120 g), cheddar e molho 336.",
    price: "26,90",
    image: "../images/1.png",
  },

  {
    burger: "Barra",
    description:
      "Hambúrguer de costela (180 g), alface americana, tomate, queijo cheddar, cebola roxa e molho 336.",
    price: "37,90",
    image: "../images/2.png",
  },

  {
    burger: "Brava",
    description:
      "Hambúrguer de costela (180 g), alface americana, queijo cheddar, tiras de bacon, cebola caramelizada, molho 336 e barbecue de goiabada.",
    price: "41,90",
    image: "../images/3.png",
  },

  {
    burger: "Armação",
    description:
      "Hambúrguer de frango empanado, alface americana, tomate, queijo cheddar, tiras de bacon, picles de pepino e molho 336.",
    price: "39,90",
    image: "../images/4.png",
  },

  {
    burger: "Embaú",
    description:
      "Hambúrguer de costela (180 g), alface americana, queijo provolone, cebola roxa, picles de pepino e molho 336.",
    price: "38,90",
    image: "../images/5.png",
  },

  {
    burger: "Joaquina",
    description:
      "Hambúrguer de costela (180 g), rúcula, tomate, queijo provolone, cebola roxa, geleia de abacaxi c/ pimenta e molho 336.",
    price: "39,90",
    image: "../images/6.png",
  },

  {
    burger: "Garopaba",
    description:
      "Hambúrguer de costela (180 g), cheddar, cebola caramelizada, crispy de alho poró, molho 336 e o barbecue de goiabada.",
    price: "39,90",
    image: "../images/7.png",
  },

  {
    burger: "Ouvidor",
    description:
      "Hambúrguer de costela (180 g), alface americana, queijo provolone, tiras de bacon, crispy de alho poró, molho 336 e barbecue de goiabada.",
    price: "43,90",
    image: "../images/8.png",
  },

  {
    burger: "Rosa",
    description:
      "Hambúrguer de costela (180 g), alface americana, tomate, queijo gorgonzola, tiras de bacon, cebola caramelizada e molho 336.",
    price: "43,90",
    image: "../images/9.png",
  },

  {
    burger: "Farol",
    description:
      "Hambúrguer de cordeiro (180 g), rúcula, tomate, mussarela de búfala, cebola roxa, geleia de abacaxi c/ pimenta e molho 336.",
    price: "43,90",
    image: "../images/10.png",
  },

  {
    burger: "Ferrugem",
    description:
      "Duplo hambúrguer de costela (120 g + 120 g), alface americana, tomate, duplo queijo cheddar, geleia de bacon, crispy de alho poró e o molho 336.",
    price: "49,90",
    image: "../images/11.png",
  },
];

function generateMenu() {
  for (let i = 0; i < MENU.length; i++) {
    const BURGER_CARD = document.createElement("div");
    BURGER_CARD.classList.add("col");

    BURGER_CARD.innerHTML = `
      <div class="card border-warning h-100" style="border-radius: 8px; background-color: #0c392d"> <!-- Added h-100 class for equal height -->
        <img src="${MENU[i].image}" class="card-img-top" alt="${MENU[i].burger}">
        <div class="card-body d-flex flex-column "> <!-- Added d-flex and flex-column classes -->
          <h5 class="card-title text-white">${MENU[i].burger}</h5>
          <p class="card-text flex-grow-1 text-white">${MENU[i].description}</p> <!-- Added flex-grow-1 class -->
          <div class="card-footer">
            <span class="fw-bold text-white">R$${MENU[i].price}</span>
          </div>
        </div>
      </div>
    `;

    BURGER_CONTAINER.appendChild(BURGER_CARD);
  }
}

generateMenu();
