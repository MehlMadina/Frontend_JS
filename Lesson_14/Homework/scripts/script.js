const formElem = document.querySelector(".form");
const total_value_elem = document.querySelector(".total_prc_cnt");

const productsArr = [];

const cardsRender = () => {
  const cardContainer = document.querySelector(".cards-container");
  cardContainer.innerText = "";

  if (productsArr.length === 0) {
    const info_elem = document.createElement("p");
    info_elem.innerText = `Товаров нет`;

    info_elem.classList.add("info");

    cardContainer.append(info_elem);
  } else {
    productsArr.forEach(({ title, price, count }) => {
      const card = document.createElement("div");
      const titleElem = document.createElement("p");
      const priceElem = document.createElement("p");
      const countElem = document.createElement("p");

      const sum = price * count;

      titleElem.innerText = title;
      priceElem.innerText = price;
      countElem.innerText = `${price} x ${count} = ${sum}`;

      card.classList.add("card");
      titleElem.classList.add("card_title");

      card.append(titleElem, priceElem, countElem);
      cardContainer.append(card);
    });
  }
};

cardsRender();

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const { title, price, count } = event.target;

  productsArr.push({
    title: title.value,
    price: price.value,
    count: count.value,
  });

  title.value = "";
  price.value = "";
  count.value = "";

  cardsRender();
  rerender();
});

const rerender = () => {
  total_value_elem.innerText = "";
  const total_price = productsArr.reduce(
    (prev, { price, count }) => prev + price * count,
    0
  );
  const total_cnt = productsArr.reduce((prev, { count }) => prev + count++, 0);
  const total_price_elem = document.createElement("p");
  const total_count_elem = document.createElement("p");

  total_price_elem.innerText = `Oбщая стоимость: ${total_price}`;
  total_count_elem.innerText = `Общее количество: ${total_cnt}`;
  total_value_elem.append(total_price_elem, total_count_elem);
};
