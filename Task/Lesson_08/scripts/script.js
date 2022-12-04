const laptops = [
  {
    id: 1,
    name: "Acer",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 2000,
    category: "laptop",
  },
  {
    id: 2,
    name: "HP Pavillon",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 2500,
    category: "laptop",
  },
  {
    id: 3,
    name: "Samsung X20",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 4000,
    category: "monoblock",
  },
  {
    id: 4,
    name: "Iphone 13Pro",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 2000,
    category: "smartphone",
  },
  {
    id: 5,
    name: "Sony TI201",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 900,
    category: "smartphone",
  },
  {
    id: 6,
    name: "Samsung",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 4000,
    category: "PC",
  },
  {
    id: 7,
    name: "Acer Computer M500",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 2500,
    category: "PC",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-input");
const categories = document.querySelectorAll(".category");

const showProducts = (products) => {
  productsContainer.innerHTML = products
    .map(
      (product) => `
        <div class="product">
          <img 
            src="${product.img}"
            alt="" 
            class="product-img">
          <h5 class="product-name">${product.name}</h5>
          <p class="product-price">${product.price}</p>
        </div>
        `
    )
    .join("");
};

showProducts(laptops);

// Функция поиска по введенному значению

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.trim(); // e.target.value - введенная строка
  // фильтруем массив laptops по содержанию строки e.target.value
  // в свойстве name каждого объекта массива

  const filteredByValueProd = laptops.filter((product) =>
    product.name.toLowerCase().includes(value.toLowerCase())
  );
  showProducts(filteredByValueProd);
});

// Отфильтровать список элементов в html по введенному значению
// Используя метод фильтр проверяем содержится ли введенная строка внутри
// имени объекта laptops...

/*
  1. Используя метод filter, includes отфильтровать список продуктов по введенному в input значению
  2. Вызвать функцию showProducts с отфильтрованными продуктами
  3*. Если в поле ничего не ввели, то просто вызывать showProducts со всеми продуктами
*/

const arr = [
  {
    name: "Arsen",
  },
  {
    name: "Ivan",
  },
  {
    name: "Anna",
  },
];

const str = "a"; // Содержится ли данная подстрока внутри name? includes
// Отфильтровать массив arr и оставить только те объекты, внутри значения свойства name
// которых содержится подстрока str, т.е буква a.

// const filteredNames = arr.filter(el => el.name.includes(str));
// console.log(filteredNames);



// Функция фильтрация по категории

categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    const selectedCategory = e.target.textContent; // все, computer, laptop
    // if (selectedCategory === "Все") {
    //   showProducts(laptops);
    // } else {
    //   const filteredByCategoryProd = laptops.filter(
    //     (laptop) => laptop.category === selectedCategory.toLowerCase()
    //   );
    //   showProducts(filteredByCategoryProd);
    // }

    const filteredByCategoryProd = laptops.filter(
      (laptop) => laptop.category === selectedCategory.toLowerCase()
    );

    selectedCategory === "Все"
      ? showProducts(laptops)
      : showProducts(filteredByCategoryProd);
  });
});

// NodeList - forEach
// map, filter, reduce - Array.prototype

/*
  querySelector() - метод, который позволяет найти первый попавшийся элемент по селектору
  querySelectorAll() - метод, который позволяет найти все элементы по селектору
*/
