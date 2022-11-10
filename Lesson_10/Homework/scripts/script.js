
// 1)Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать -
// Какой-то текст! - input

const btn_1_elem = document.querySelector(".btn_1");
const btn_2_elem = document.querySelector(".btn_2");
const input_elem = document.querySelector("input");
btn_1_elem.addEventListener("click", () => (input_elem.disabled = true));
btn_2_elem.addEventListener("click", () => (input_elem.disabled = false));



// 2) Задача querySelectorAll Поменяйте содержимое абзацев на их порядковый номер в коде. Используйте перебор, индексы и textContent
//Заголовок, не поменяется.
//Абзац, поменяется.
//Абзац, поменяется.
//Абзац, поменяется.

function check_index() {
  let p_elem = document.querySelectorAll("p");
  for (let i = 0; i < p_elem.length; i++) {
    p_elem[i].innerText = i + 1;
  }
}
