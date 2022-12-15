// После отправки формы добавлять продукт в корзину
// Переменные

const addForm = document.querySelector(".add_form");
const productName = document.querySelector(".add_name");
const productsWrapper = document.querySelector('.products_wrapper');
const notification = document.querySelector('.notification');


// Добавить продукт
const addProduct = (e) => {
  e.preventDefault();
  const currProduct = productName.value;
  const id = new Date().getTime().toString();

  if (currProduct) {
     // Создание элемента в html
    const element = document.createElement("div");
    element.setAttribute("id", id);
    element.classList.add("product");
    element.innerHTML = `
        <h5 class="product_name">${currProduct}</h5>
            <div class="product_actions">
                <button class="delete_btn">Удалить</button>
                <button class="edit_btn">Редактировать</button>
            </div>
    `
    // Добавить слушатели события
    const deleteBtn = element.querySelector(".delete_btn");
    deleteBtn.addEventListener("click", deleteProduct);

    productsWrapper.appendChild(element);

    // Добавить в localStorage. id и currProduct - данные продукта, который хотим добавить
    addToLocalStorage(id, currProduct);

    // Отобразить уведомление
    showNotification();
  }

  // Вызов функции сброса
  resetOptions();

};


// Создание элемента
const createProducts = (id, name) => {
    const element = document.createElement("div");
    element.setAttribute("id", id);
    element.classList.add("product");
    element.innerHTML = `
        <h5 class="product_name">${currProduct}</h5>
            <div class="product_actions">
                <button class="delete_btn">Удалить</button>
                <button class="edit_btn">Редактировать</button>
            </div>
    `
    // Добавить слушатели события
    const deleteBtn = element.querySelector(".delete_btn");
    deleteBtn.addEventListener("click", deleteProduct);

    productsWrapper.appendChild(element);
}


// Отображение при первой загрузке
const showProducts = () => {
    const products = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
    if (products.length > 0) {
        products.forEach(product => {
            createProducts(product.id, product.name)
        });
    }
}

showProducts();

// Уведомление
const showNotification = () => {
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none"
  }, 2000)
};


// Добавление в localStorage
const addToLocalStorage = (id, name) => {
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  console.log(products);
  const newProduct = { id, name };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
};


const resetOptions = () => {
    productName.value = '';
}


addForm.addEventListener("submit", addProduct);

const deleteProduct = () => {};


/*
    <div class="product">
        <h5 class="product_name">Наименование продукта</h5>
            <div class="product_actions">
                <button class="delete_btn">Удалить</button>
                <button class="edit_btn">Редактировать</button>
            /div>
    </div>

let element = <div></div>
element.querySelector('.delete-btn')

*/ 

// Хойстинг - hoisting. Принцип, когда все переменные и функции отправляются вверх

/*
Методы планирования. Они не вляются частью js
    setInterval(cb, time) - позволяет сделать действие несколько раз через определенный промежуток времени
    setTimeout(cb, time) - позволяет выполнить действие единожды через определенный промежуток времени
*/


// 1. Сделать универсальное уведомление. (принимать текст кнопки и цвет кнопки)
// 2. Сейчас данные сохраняются в локалсторедж, но при первой загрузке не отображаются,
//     нужно отображать данные из локалстореджа при первой загрузке.
