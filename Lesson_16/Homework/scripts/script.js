// Необходимо реализовать интерфейс, с полем ввода (textarea). При обновлении страницы текст должен сохраняться в поле ввода. 

// Реализуйте данное приложение через textarea и событие input.

const input_elem = document.querySelector("#text");

text.value = localStorage.getItem("area");
text.oninput = () => {
  localStorage.setItem("area", text.value);
};

