// После отправки формы добавлять продукт в корзину
// Переменные

const addForm = document.querySelector(".add_form");
const productName = document.querySelector(".add_name");
const productsWrapper = document.querySelector(".products_wrapper");
const notification = document.querySelector(".notification");
const submitBtn = document.querySelector('.submit_btn');


// состояние - данные, с которыми работает приложение
let editMode = false // начальное состояние приложения - данные с которыми приложение загрузится изначально 
let edittingProductName = "" // начальное состояние. название продукта, который мы сейчас редактируем

// Отображение при первой загрузке
const showProducts = () => {
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  if (products.length > 0) {
    products.forEach((product) => {
      createProducts(product.id, product.name);
    });
  }
};



// Добавить продукт
const addProduct = (e) => {
  e.preventDefault();
  const currProduct = productName.value; // то, что ввел пользователь в инпут
  const id = new Date().getTime().toString(); // генерируем id

  // действие добавление продукта
  if (currProduct && !editMode) {
    // Создание элемента в html
    createProducts(id, currProduct);

    // Добавить в localStorage. id и currProduct - данные продукта, который хотим добавить
    addToLocalStorage(id, currProduct);

    // Отобразить уведомление
    showNotification("Продукт добавлен", "success");

    // Вызов функции сброса
    resetOptions();
  } else if (currProduct && editMode) {
    console.log('Writing element');
    // старый id остается, изменяется название продукта, на то, что ввели в input
    // currProduct - это новое название продукта, который редактируем
    // у редактируемого элемента изменить его название на currProduct. 18:00 - 19:30. 
  }
};




// Создание элемента
const createProducts = (id, name) => {
  const element = document.createElement("div");
  element.setAttribute("id", id);
  element.classList.add("product");
  element.innerHTML = `
        <h5 class="product_name">${name}</h5>
            <div class="product_actions">
                <button class="delete_btn">Удалить</button>
                <button class="edit_btn">Редактировать</button>
            </div>
    `;
  // Добавить слушатели события
  const deleteBtn = element.querySelector(".delete_btn");
  deleteBtn.addEventListener("click", deleteProduct);

  const editBtn = element.querySelector('.edit_btn');
  editBtn.addEventListener('click', editProduct);

  productsWrapper.appendChild(element);
};



// Уведомление
const showNotification = (text, className) => {
  // добавляем для div класс, который получили аргументом
  notification.classList.add(`${className}`);
  // для тега p внутри уведомления меняем текст на тот, что получили аргументом
  notification.querySelector(".notification-text").innerText = `${text}`;
  // отображаем div
  notification.style.display = "block";

  // через 3 секунды скрываем его обратно
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
};



// Добавление в localStorage
const addToLocalStorage = (id, name) => {
  const products = getToLocalStorage();
  const newProduct = { id, name };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
};



// Удалить из localStorage
const removeFromLocalStorage = (id) => {
  const products = getToLocalStorage();
  const newProducts = products.filter(product => product.id !== id);
  localStorage.setItem('products', JSON.stringify(newProducts));
};



const getToLocalStorage = () => {
  // получаем то, что уже хранится в локалсторедже. Если что-то есть - то строку в массив и возвращаем
  // если ничего нет, то возвращаем пустой массив
  return localStorage.getItem("products") 
    ? JSON.parse(localStorage.getItem("products"))
    : []
};


// Очистка полей ввода
const resetOptions = () => {
  productName.value = "";
};



// Удалить продукт
const deleteProduct = (e) => {
  const productElement = e.target.parentElement.parentElement;
  // находим id элемента, кнопку "удалить" которого мы нажали
  const id = productElement.id;
  // удаляю элемент из html
  productsWrapper.removeChild(productElement);
  // удалим из localStorage, передаем id элемента, который хотим удалить, на который нажали
  removeFromLocalStorage(id);
  // показывать уведомление
  showNotification("Продукт удален", "danger");
};



// Редактировать продукт
const editProduct = (e) => {
  // переводим приложение в режим редактирования
  editMode = true
  // получаем название старого продукта
  const oldProductName = e.target.parentElement.previousElementSibling // <h5 class="product-name">молоко</h5>
  // в режиме редактирования кнопка называется не "добавить", а "редактировать"
  submitBtn.value = 'Сохранить';
   // название редактируемого продукта переходит в input.
  productName.value = oldProductName.innerText;
}



addForm.addEventListener("submit", addProduct);



// Вызов функции для первого рендеринга. Получаем данные из локалстореджа и отображаем
// юзеру
showProducts();





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

// classList - свойтсво объекта html, с помощью которого можно получить список классов элемента
// у него есть несколько методов:
// .add() - добавялет класс
// .remove() - удаляет класс
// .toggle() - переключатель. добавляет класс, если его не было и наоборот.
