// const arr = {
//   data: [12, 4, 32, 5, 43],
// };

// localStorage.setItem("test_item", JSON.stringify(arr));

// const obj_str = localStorage.getItem('rest_item')
// const obj = JSON.parse(obj_str);
// console.log(obj.data);

// JSON - JavaScript Object Notation

// const cells = state.grid.cells;
// cells.map((column, x) =>
//   column.map((_, y) => ({ position: { x, y }, value: 2048 }))
// );



// 1. Реализовать процесс в js, который при отправке формы выводит
// содержимое поля ввода в консоль

const form_elem = document.querySelector(".add_task");
const tasks_container = document.querySelector('.tasks');


const write_local = (tasks) =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

const read_local = () => JSON.parse(localStorage.getItem("tasks")) ?? [];

let tasks = read_local();


form_elem.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = event.target.task.value;
  console.log(task);
  tasks.push({ id: Date.now(), task });
  write_local(tasks);
  event.target.task.value = "";
  rerender();
});


const rerender = () => {
  tasks_container.innerText = "";
  if (read_local().length === 0) {
    const text_elem = document.createElement("p");
    text_elem.innerText = "Никаких дел нет!";
    tasks_container.append(text_elem);
  } else {
    read_local().forEach((item) => {
      const text_elem = document.createElement("p");
      text_elem.innerText = item.task;
      tasks_container.append(text_elem);
    });
  }
};

rerender();
