// При нажатии на кнопки менять цвет body на соотв-й.

// 1. Ищем каждую кнопку по ее id. querySelector
// 2. На каждую вешаем слушатель события - клика. addEventListener 'click'
// 3. В обработчике события создаем действие, которое позволит изменить цвет. document.body.style.backgroundColor = 'red';
// 4. При нажатии на кнопку img, нужно менять фон на картинку
//  document.body.style.backgroungImage = 'url(./img1.jpg)';

// const redBtn = document.querySelector("#red");
// const greenBtn = document.querySelector("#green");
// const blueBtn = document.querySelector("#blue");
// const imgBtn = document.querySelector("#img");

// redBtn.addEventListener("click", () => {
//   document.body.style.background = "pink";
// });

// greenBtn.addEventListener("click", () => {
//   document.body.style.background = "lightgreen";
// });

// blueBtn.addEventListener("click", () => {
//   document.body.style.background = "lightblue";
// });

// imgBtn.addEventListener("click", () => {
//   document.body.style.background = "url(img/img.jpg)";
// });

const buttons = document.querySelectorAll(".item");
// console.log(buttons); // massivopodobniy spisok uzlov

const buttonsArr = Array.from(buttons);

buttonsArr.map((button) => {
  button.addEventListener("click", () => {
    const idAtr = button.getAttribute("id"); // red, green, blue, ....
    document.body.style.background = idAtr;
  });
});

// Pri najatii na knopku sluchainiy zvet, menyat zvet fona na sluchayniy.

const random = document.querySelector("#random");

const get_color = () => Math.round(Math.random() * 255);

random.addEventListener("click", () => {
  document.body.style.background = `rgb(${get_color()}, ${get_color()}, ${get_color()})`;
});
