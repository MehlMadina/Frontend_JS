// 1) Создайте кнопку в html при нажатию на которую в консоль выводится "привет".

const btn_elem = document.querySelector("button");
btn_elem.addEventListener("click", () => console.log("привет"));



// 2) Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой должен получать
// border-radius 50px и overflow hidden. При нажатии второй раз на кнопку стили должны убираться и
// возвращаться к исходным. Реализуйте через classList.toggle()

const img_elem = document.querySelector(".img");
const button_elem = document.querySelector(".btn");
button_elem.addEventListener("click", () => {
  img_elem.classList.toggle("active");
});
