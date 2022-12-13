const formElem = document.querySelector(".form");
const cards_container = document.querySelector(".cards-container");
const total_value_elem = document.querySelector(".total_prc_cnt");

const write_local = (product) =>
  localStorage.setItem("product", JSON.stringify(product));

const read_local = () => JSON.parse(localStorage.getItem("product")) ?? [];


formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const title_elem = event.target.title.value;
  const price_elem = event.target.price.value;
  const count_elem = event.target.count.value;
  const id = Date.now();

  write_local([...read_local(), { id, title_elem, price_elem, count_elem }]);

  event.target.title.value = "";
  event.target.price.value = "";
  event.target.count.value = "";

  render();
});


const render = () => {
  cards_container.innerText = "";

  if (read_local().length === 0) {
    const info_elem = document.createElement("p");

    info_elem.innerText = "Товаров нет";
    info_elem.classList.add("info");

    cards_container.append(info_elem);
  } else {
    read_local().forEach(({ id, title_elem, price_elem, count_elem }) => {
      const new_card = createCard(id, title_elem, price_elem, count_elem);

      cards_container.append(new_card);
    });

    total_value_elem.innerText = "";
    const total_price = read_local().reduce(
      (prev, { price_elem, count_elem }) => prev + price_elem * count_elem,
      0
    );
    const total_cnt = read_local().reduce(
      (prev, { count_elem }) => prev + count_elem++,
      0
    );
    const total_price_elem = document.createElement("p");
    const total_count_elem = document.createElement("p");

    total_price_elem.innerText = `Общая стоимость: ${total_price}`;
    total_count_elem.innerText = `Общее количество: ${total_cnt}`;
    total_value_elem.append(total_price_elem, total_count_elem);
  }
};


const delete_task = (id) => {
  const newArr = read_local().filter((item) => item.id !== id);
  write_local(newArr);
  render();
};


const createCard = (id, title, price, count) => {
  const card_el = document.createElement("div");
  const title_el = document.createElement("p");
  const price_el = document.createElement("p");
  const count_el = document.createElement("p");
  const btn_elem = document.createElement("button");

  card_el.append(title_el, price_el, count_el, btn_elem);

  const sum = price * count;

  title_el.innerText = title;
  price_el.innerText = price;
  count_el.innerText = `${price} X ${count} = ${sum}`;
  btn_elem.innerText = "Удалить";

  btn_elem.addEventListener("click", () => delete_task(id));

  card_el.classList.add("card");
  title_el.classList.add("card_title");
  btn_elem.classList.add("delete_btn");

  return card_el;
};

render();
