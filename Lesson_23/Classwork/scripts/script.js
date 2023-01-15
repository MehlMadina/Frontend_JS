const todos = [
  {
    id: 1,
    title: "поесть",
    dttm: "15.01.2023",
    done_flg: true,
  },
  {
    id: 2,
    title: "поспать",
    dttm: "16.01.2023",
    done_flg: false,
  },
];

const form = document.querySelector(".add_todo");
const todo_container = document.querySelector(".todo_container");
const count_container = document.querySelector(".count_container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { title } = event.target;
  const new_todo = {
    id: Date.now(),
    title: title.value,
    dttm: new Date().toLocaleString(),
    done_flg: false,
  };

  todos.push(new_todo);
  rerender();
  title.value = "";
});

function rerender() {
  todo_container.innerText = "";

  //   const done_cnt = todos.reduce((prev, item) => prev + item.done_flg ? 1 : 0, 0);
  //   const not_done_cnt = todos.length - done_cnt;

  const done_cnt = todos.filter((item) => item.done_flg).length;
  const not_done_cnt = todos.filter((item) => !item.done_flg).length;

  count_container.innerText = `Done = ${done_cnt} Not done = ${not_done_cnt}`;

  console.log(done_cnt, not_done_cnt);

  todos.forEach((todo) => {
    const card = document.createElement("div");
    const titleElem = document.createElement("p");
    const dttmElem = document.createElement("p");
    const info = document.createElement("div");
    const change_state = document.createElement("button");

    change_state.addEventListener("click", () => {
      // 1 вариант
      // const target = todos.find(item => item.id === todo.id);
      // target.done_flg = !target.done_flg;

      // 1 вариант
      todo.done_flg = !todo.done_flg;
      rerender();
    });

    titleElem.innerText = todo.title;
    dttmElem.innerText = todo.dttm;
    change_state.innerText = todo.done_flg ? "Сделано" : "Сделать";

    change_state.style.backgroundColor = todo.done_flg ? "#55efc4" : "#ff7675";

    card.classList.add("item");

    if (todo.done_flg) {
      card.classList.add("done");
    }

    info.append(titleElem, dttmElem);
    card.append(info, change_state);
    todo_container.append(card);
  });
};
