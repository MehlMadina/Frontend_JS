// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(resp => resp.json())
//     .then(data => console.log(data));


// создать функцию, которая получает в качестве аргумента 
// получает название поста и добавляет в элемент #root
// параграф с названием поста

const root = document.querySelector("#root");

// const createPost = (title) => {
//   const nameElem = document.createElement("p");
//   nameElem.innerText = title;
//   root.append(nameElem);
// };

// createPost("Hello, world!");



// Доработать функцию createPost таким образом, чтобы функция 
// получала два аргумента (заголовок и текст поста)
// и формировала следущую верстку

/*
    <div>
        <p>Заголовок</p>
        <p>Текст</p>
    </div>
*/ 


// const root = document.querySelector("#root");

// const createPost = (title, text) => {
//   const container = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const textElem = document.createElement("p");

//   nameElem.innerText = title;
//   textElem.innerText = text;

//   container.append(nameElem, textElem);
//   root.append(container);
// };

// createPost("Hello, world!", "My dear friend!");


// используя функцию createPost отображайте данные, пришедшие с сервера, в интерфейсе


// const root = document.querySelector("#root");

const createPost = (title, text) => {
 

  const container = document.createElement("div");
  const nameElem = document.createElement("p");
  const textElem = document.createElement("p");

  nameElem.innerText = title;
  textElem.innerText = text;

  container.classList.add('post');
  nameElem.classList.add('subheader');

  container.append(nameElem, textElem);
  root.append(container);
};


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(resp => resp.json())
//     .then(data => createPost(data.title, data.body));


// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(resp => resp.json())
//     .then(({title, body}) => createPost(title, body));    


    


const form = document.querySelector(".add_form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id_elem = event.target.id.value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${id_elem}`)
    .then((resp) => resp.json())
    .then(({title, body }) => createPost(title, body));

  event.target.id.value = "";
});    



// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// }).then((response) => response.json())
//   .then((json) => console.log(json));





const form_elem = document.querySelector(".form");

form_elem.addEventListener("submit", (event) => {
  event.preventDefault();

  const {title, body, user_id} = event.target;

  sendPost(title.value, body.value, user_id.value);

  title.value = "";
  body.value = "";
  user_id.value = "";
});




const sendPost = (title, body, userId) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title, body, userId }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(({title, body}) => createPost(title, body));
};


const posts = [];

const rerender = () => {
    root.innerText = '';
    
}