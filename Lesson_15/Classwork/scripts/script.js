const add_form = document.querySelector(".add_form");
const products = document.querySelector(".products");

let data = [
  {
    id: 1,
    title: "Велосипед",
    price: 45000,
  },
  {
    id: 2,
    title: "Ролики",
    price: 25000,
  },
  {
    id: 3,
    title: "Самокат",
    price: 15000,
  },
];

add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = add_form.title.value;
  const price = add_form.price.value;
  const id = Date.now();
  data.push({ id, title, price });
  add_form.title.value = "";
  add_form.price.value = "";

  render();
});

// создать функцию, которая для каждого элемента массива data
// создает div с названием и ценой товара и добавляет в
// div с классом products

/*
<div>
    <p>Название товара</p>
    <p>Цена</p>
</div>
*/

// создать функцию, которая возвращает случайный цвет
// rgb(124, 56, 32)

function random_color() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function deleteProduct(id) {
  data = data.filter((product) => product.id !== id);
  render();
}

const cards_render = (id, title, price) => {
  const card = document.createElement("div");
  const title_elem = document.createElement("p");
  const price_elem = document.createElement("p");
  const delete_btn_elem = document.createElement("button");

  delete_btn_elem.addEventListener("click", () => deleteProduct(id));
  
  card.addEventListener(
    "mousemove",
    () => (card.style.backgroundColor = random_color())
  );

  title_elem.innerText = title;
  price_elem.innerText = price;
  delete_btn_elem.innerText = `Удалить`;

  card.classList.add("product");

  card.append(title_elem, price_elem, delete_btn_elem);
  return card;
};

const render = () => {
  products.innerText = "";

  if (data.length === 0) {
    const info_elem = document.createElement("p");
    info_elem.innerText = `Товаров нет`;

    info_elem.classList.add('info');
    
    products.append(info_elem);
  } else {
    data.forEach(({ id, title, price }) => {
      const container = cards_render(id, title, price);
      products.append(container);
    });
  }
};
render();