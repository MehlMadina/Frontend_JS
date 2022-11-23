const btn_elem = document.querySelector('.btn');
const p_elem = document.querySelector('.text');

// btn_elem.addEventListener('click', () => console.log('Привет!'));

// btn_elem.onclick = () => console.log('Привет!');  // Не тоже самое что и addEventListener

// const handler = () => console.log('Привет!');
// btn_elem.addEventListener('click', () => console.log('Привет!'));

// btn_elem.removeEventListener('click', handler);
// p_elem.addEventListener('click', () => console.log('Привет из параграфа'));



// function random_color() {
//   const r = Math.round(Math.random() * 255);
//   const g = Math.round(Math.random() * 255);
//   const b = Math.round(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// btn_elem.addEventListener(
//   "click",
//   () => (btn_elem.style.backgroundColor = random_color())
// );


// function random_color(){
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
//     return color;
// }


// создать программу, которая имитирует работу игральных костей
// при нажатии на кнопку в параграфе должны появиться два случайных числа от 1 до 6

// const get_number = () => Math.round(Math.random() * 5 + 1);
// const get_number = () => Math.ceil(Math.random() * 6);

// btn_elem.addEventListener('click', () => {
//     p_elem.innerText = `${get_number()} X ${get_number()}`
//   });



const add_form = document.querySelector(".add_form");
const products = document.querySelector('.products');

const data = [];

add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = add_form.title.value;
  const price = add_form.price.value;
  data.push({ title, price });
  add_form.title.value = '';
  add_form.price.value = '';
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

const render = () => {
  products.innerText = "";
  data.forEach(({ title, price }) => {
    const card = document.createElement("div");
    const title_elem = document.createElement("p");
    const price_elem = document.createElement("p");

    title_elem.innerText = title;
    price_elem.innerText = price;

    card.append(title_elem, price_elem);
    products.append(card);
  });
};


