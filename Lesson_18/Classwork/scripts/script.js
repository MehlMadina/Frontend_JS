const form_elem = document.querySelector(".add_task");
const tasks_container = document.querySelector(".tasks");


const write_local = (tasks) =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

const read_local = () => JSON.parse(localStorage.getItem("tasks")) ?? [];

form_elem.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = event.target.task.value;
  write_local([...read_local(), { id: Date.now(), task }]);
  event.target.task.value = "";
  rerender();
});



function delete_task(id) {
  const newArr = read_local().filter((item) => item.id !== id);
  write_local(newArr);
  rerender();
}


const createCard = (title, id) => {
  const card = document.createElement("div");
  const p_elem = document.createElement("p");
  const btn_elem = document.createElement("button");

  p_elem.innerText = title;
  btn_elem.innerText = `Удалить`;
  btn_elem.classList.add("button");

  btn_elem.addEventListener("click", () => delete_task(id));

  card.append(p_elem, btn_elem);
  return card;
};


const rerender = () => {
  tasks_container.innerText = "";
  if (read_local().length === 0) {
    const text_elem = document.createElement("p");

    text_elem.innerText = "Никаких дел нет!";
    text_elem.classList.add("text");

    tasks_container.append(text_elem);
  } else {
    read_local().forEach(({ task, id }) => {
      const new_card = createCard(task, id);

      tasks_container.append(new_card);
    });
  }
};

rerender();
