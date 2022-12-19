// Написать страницу, в которой реализована форма с одним полем ввода (id). При отправке формы должен происходить асинхронный запрос на сервер. На основе полученных данных необходимо отобразить информацию о товаре.

// ссылка для запросов https://fakestoreapi.com/products/1 (последний параметр - id продукта).

// Дизайн на ваше усмотрение, но он должен быть.

const root_elem = document.querySelector("#root");
const form_elem = document.querySelector(".form");



const createCard = (id, title, price, desc, category, img, rating) => {
  const container = document.createElement("div");
  const id_elem = document.createElement("p");
  const title_elem = document.createElement("p");
  const price_elem = document.createElement("p");
  const desc_elem = document.createElement("p");
  const category_elem = document.createElement("p");
  const img_elem = document.createElement("img");
  const rating_elem = document.createElement("p");

  id_elem.innerText = `ID: ${id}`;
  title_elem.innerText = `Title: ${title}`;
  price_elem.innerText = `Price: ${price}`;
  desc_elem.innerText = `Description: ${desc}`;
  category_elem.innerText = `Category: ${category}`;
  rating_elem.innerText = `Rating: \nrate: ${rating.rate}, count: ${rating.count}`;

  img_elem.setAttribute("src", img);
  img_elem.setAttribute("alt", "photo");

  container.classList.add("card");
  img_elem.classList.add("photo");

  container.append(
    id_elem,
    title_elem,
    price_elem,
    desc_elem,
    category_elem,
    img_elem,
    rating_elem
  );
  root_elem.append(container);
};



form_elem.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.id.value;

  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((resp) => resp.json())
    .then(({ id, title, price, description, category, image, rating }) =>
      createCard(id, title, price, description, category, image, rating)
    );

  event.target.id.value = "";
});
