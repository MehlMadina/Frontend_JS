// Необходимо реализовать приложение, которое загружает карточки с API по ссылке https://fakestoreapi.com/products и отображает в виде карточек с продуктами.  
// В каждой карточке должна быть кнопка удалить. При нажатии на нее карточка должна удаляться. 
// Обратите внимание, что хранение данных вы должны реализовать через массив. При удалении товар должен удаляться из карточки и потом должен происходить процесс перерисовки интерфейса (на подобии функции render ).


const root = document.querySelector('#root');


const render = (json) => {
  const cards = json.map(
    ({ title, price, description, category, image, rating }) => {
      const card = document.createElement("div");
      const titleElem = document.createElement("p");
      const priceElem = document.createElement("p");
      const descElem = document.createElement("p");
      const categoryElem = document.createElement("p");
      const imageElem = document.createElement("img");
      const ratingElem = document.createElement("p");
      const btnElem = document.createElement("button");

      titleElem.innerText = title;
      priceElem.innerText = `Price: ${price}$`;
      descElem.innerText = `Description: ${description}`;
      categoryElem.innerText = `Category: ${category}`;
      ratingElem.innerText = `rate: ${rating.rate}, count: ${rating.count}`;
      btnElem.innerText = `Remove`;

      btnElem.addEventListener("click", deleteProduct);

      card.classList.add("card");
      imageElem.classList.add("img");
      titleElem.classList.add("title");

      imageElem.setAttribute("src", image);
      imageElem.setAttribute("alt", "photo");

      card.append(
        titleElem,
        priceElem,
        descElem,
        categoryElem,
        imageElem,
        ratingElem,
        btnElem
      );
      return card;
    }
  );

  root.append(...cards);
};


const deleteProduct = (e) => {
  const productElem = e.target.parentElement;
  root.removeChild(productElem);
};


fetch("https://fakestoreapi.com/products")
  .then((resp) => resp.json())
  .then((json) => render(json));


