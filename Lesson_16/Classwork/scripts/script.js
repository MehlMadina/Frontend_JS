// 1. Написать обработчик, который позволит выводить строку "привет" 
// при нажатии на кнопку .change_mode

const btn_elem = document.querySelector('.change_mode');
const main_elem = document.querySelector('.main');


// btn_elem.addEventListener('click', () => console.log('Привет!'));



// 2. Доработать данный процесс таким образом, чтобы
// при нажатии на кнопку элементу с классом main добавлялся класс dark

// btn_elem.addEventListener('click', () => main_elem.classList.add('dark'));




// 3. Найти и применить метод у classList, позволяющий добавлять 
// класс, если его нет и удалять его, если он есть

// btn_elem.addEventListener('click', () => main_elem.classList.toggle('dark'));



// localStorage.getItem('mode')

// LocalStorage — это свойство, открывающее доступ к специальному объекту Storage (хранилище). Его используют для получения информации из локального хранилища.

// Для чего нужен localStorage?
// Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере. Что в них важно – данные, которые в них записаны, сохраняются после обновления страницы (в случае sessionStorage ) и даже после перезапуска браузера (при использовании localStorage )

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}


btn_elem.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});



const first_btn = document.querySelector('.text_size_btns .first_btn');
const second_btn = document.querySelector('.text_size_btns .second_btn');

// повесить на эти кнопки обработчики и при нажатии на 
// них выводить + или - в консоль

// first_btn.addEventListener('click', () => console.log('+')); 
// second_btn.addEventListener('click', () => console.log('-')); 


// реализовать увеличение и уменьшение текста ".main p" на 1 при нажатии
// на соответствующие кнопки

// main_elem.style.fontSize = '15px';

// first_btn.addEventListener("click", () => {
//     const current_fontSize = parseInt(main_elem.style.fontSize);
//     main_elem.style.fontSize = current_fontSize + 1 + "px";
// });

// second_btn.addEventListener("click", () => {
//     const current_fontSize = parseInt(main_elem.style.fontSize);
//     main_elem.style.fontSize = current_fontSize - 1 + "px";
// }); 



// let fontSize = 12;
let fontSize;

// 1) проверить наличие значения fontSize в localStorage  и если его нет, 
// задать 12, а если есть, считать в переменную

if (localStorage.getItem('fontSize')) {
  fontSize = +localStorage.getItem('fontSize');
} else {
  fontSize = 12;
  localStorage.setItem('fontSize', 12);
}


main_elem.style.fontSize = fontSize + "px";

first_btn.addEventListener("click", () => {
  // fontSize++;
  fontSize += 1;
  localStorage.setItem('fontSize', fontSize)
  main_elem.style.fontSize = fontSize + "px";
});

// при изменении размера шрифта перезаписывать значение в localStorage


second_btn.addEventListener("click", () => {
  // fontSize--;
  fontSize -= 1;
  localStorage.setItem('fontSize', fontSize)
  main_elem.style.fontSize = fontSize + "px";
}); 