// DOM - Document Object Model.

// const elem = document.querySelector('p');
// const elem_list = document.querySelectorAll('p');

// console.log(elem);
// console.log(elem_list);
// console.log(elem.innerText);
// console.log(elem.innerHTML);
// console.log(elem.textContent);

// const text_list = [...elem_list].map(elem => elem.innerText);
// console.log(text_list);


// const main_elem = document.getElementById('main');
// const p_list = document.getElementsByTagName('p');

// console.log(main_elem);
// console.log(p_list);



// SPREAD OPERATOR

// const a = [12, 4, 32, 2];

// function func(a1, a2, a3, a4) {
//   return a1 + a2 + a3 + a4;
// }

// console.log(func(a)); // '12, 4, 32, 2undefinedundefinedundefined'
// console.log(func(a[0], a[1], a[2], a[3]));
// console.log(func(...a));

// const b = [4, 3, ...a];
// console.log(b);  // [4, 3, 12, 4, 32, 2]






// 1. Вывести в консоль текст из параграфа, который находится в 
// div с классом main

// const textElem = document.querySelector('.main p');
// console.log(textElem.innerText);


// 2. Вывести параграф с классом info из div с идентификатором main

// const pElem = document.querySelector('#main .info');
// console.log(pElem.innerText);


// 3. Найти параграф с классом main, который находится в div, который находится в div с идентификатором info

// const pElem = document.querySelector('#info div .main');
// console.log(pElem.innerText);





const rootElem = document.querySelector('#root');

// const p_elem = document.createElement('p');
// p_elem.innerText = 'I am a new element';

// rootElem.append(p_elem);


// const words = ['велосипед', 'самокат', 'лыжи'];

// words.forEach((word) => {
//   const p_elem = document.createElement("p");
//   p_elem.innerText = word;
//   rootElem.append(p_elem);
// });



const products = [
  {
    title: "велосипед",
    price: 45000,
    count: 15,
    link: 'https://example.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg'

  },
  {
    title: "самокат",
    price: 25000,
    count: 10,
    link: 'https://example.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg'
  },
  {
    title: "лыжи",
    price: 30000,
    count: 0,
    link: 'https://example.com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg'
  },
];

// в случае, если кол-во товара равно нулю выведите фразу "Товар закончился"

products.forEach(({ title, price, count, link, img }) => {
  const container = document.createElement("div");
  const title_p = document.createElement("p");
  const price_p = document.createElement("p");
  const count_p = document.createElement("p");
  const link_a = document.createElement("a");
  const img_p = document.createElement("img");

  title_p.innerText = `Title: ${title}`;
  price_p.innerText = `Price: ${price}`;
  count_p.innerText = `Count: ${count === 0 ? `Товар закончился` : count}`;
  link_a.innerText = "подробнее...";
  link_a.href = link;
  //   link_a.target = "_blank"; // новая вкладка
  img_p.src = img;

  container.append(img_p, title_p, price_p, count_p, link_a);
  rootElem.append(container);

  container.classList.add("product");
});


// products.forEach((product) => {
//   rootElem.innerHTML += `
//     <div>
//         <p>${product.title}</p>    // Не использовать!
//         <p>${product.price}</p>
//     </div>

//     `;
// });



