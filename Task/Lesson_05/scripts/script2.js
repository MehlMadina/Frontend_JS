const main = document.querySelector('main');

// const book = {
//     author: 'Пушкин А. С.',
//     name: 'Капитанская дочка',
//     count: 500
// }

// main.innerHTML = `
//     <div class="book">
//     <p>Название: ${book.name}</p>
//     <p>Автор: ${book.author}</p>
//     <p>Количество страниц: ${book.count}</p>
//     </div>

// `;

const books = [
  {
    id: 1,
    author: "Пушкин",
    name: "Капитанская дочка",
    count: 500
  },
  {
    id: 2,
    author: "Толстой",
    name: "Война и мир",
    count: 1000
  },
  {
    id: 3,
    author: "Достоевский",
    name: "Преступление и наказание",
    count: 700
  },
];

// main.innerHTML = `
//     <div class="book">
//       <p>Название: ${books[0].name}</p>
//       <p>Автор: ${books[0].author}</p>
//       <p>Количество страниц: ${books[0].count}</p>
//     </div>
//     <div class="book">
//       <p>Название: ${books[1].name}</p>
//       <p>Автор: ${books[1].author}</p>
//       <p>Количество страниц: ${books[1].count}</p>
//     </div>
//     <div class="book">
//       <p>Название: ${books[2].name}</p>
//       <p>Автор: ${books[2].author}</p>
//       <p>Количество страниц: ${books[2].count}</p>
//     </div>
// `;

// books.filter(book => {
//     return book.count > 600
// }).map((book) => {
//   main.innerHTML += `
//         <div class="book">
//            <p>Название: ${book.name}</p>
//            <p>Автор: ${book.author}</p>
//            <p>Количество страниц: ${book.count}</p>
//            <button>Удалить</button>
//          </div>
//     `;
// });

function showBooks() {
  books.map((book) => {
    main.innerHTML += `
    <div class="book book-${book.id}">
        <p>Название: ${book.name}</p>
        <p>Автор: ${book.author}</p>
        <p>Количество страниц: ${book.count}</p>
        <button class="delete-btn" id="${book.id}">Удалить</button>
    </div>
    `;
  });
}

showBooks();

// Udaleniye

const buttons = document.querySelectorAll('.delete-btn');
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const idAtr = button.getAttribute('id');
        const delBook = document.querySelector(`.book-${idAtr}`);
        delBook.remove();
    })
}); 