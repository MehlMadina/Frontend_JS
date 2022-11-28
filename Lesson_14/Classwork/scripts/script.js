const btn_elem = document.querySelector(".btn");
const p_elem = document.querySelector(".text");

// btn_elem.addEventListener('click', () => console.log('Привет!'));

// btn_elem.onclick = () => console.log('Привет!');  // Не тоже самое что и addEventListener

// const handler = () => console.log('Привет!');
// btn_elem.addEventListener('click', () => console.log('Привет!'));

// btn_elem.removeEventListener('click', handler);
// p_elem.addEventListener('click', () => console.log('Привет из параграфа'));

// function random_color() {
//   const r = Math.round(Math.random() * 255);
//   const g = Math.round(Math.random() * 255);
//   const b = Math.round(Math.random() * 255);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// btn_elem.addEventListener(
//   "click",
//   () => (btn_elem.style.backgroundColor = random_color())
// );

// function random_color(){
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
//     return color;
// }

// создать программу, которая имитирует работу игральных костей
// при нажатии на кнопку в параграфе должны появиться два случайных числа от 1 до 6

// const get_number = () => Math.round(Math.random() * 5 + 1);
// const get_number = () => Math.ceil(Math.random() * 6);

// btn_elem.addEventListener('click', () => {
//     p_elem.innerText = `${get_number()} X ${get_number()}`
//   });


