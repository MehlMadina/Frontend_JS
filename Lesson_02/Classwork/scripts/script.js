// while
// do - while
// for



// Перед рассмотрением циклов
// разберемся с инкременцией и декременцией
// увеличение/уменьшение на единицу

// let age = 18;
// console.log(++age); // префиксная инкрементация
// console.log(age++); // постфиксная инкрементация
// console.log(--age); // префиксная декрементация
// console.log(age--); // постфиксная декрементация









// префиксная форма срабатывает сразу же!
// let number = 5;
// // number = number + 1
// console.log(number++) // 5
// console.log(number) // 6








// постфиксная форма срабатывает после следующего обращения к переменной!
// let number2 = 5;
// // number = number + 1 (при следующем вызове переменной)
// console.log(number2++) // 5
// console.log(number2) // 6


// префиксная форма срабатывает сразу же!
// let number = 5;
// console.log(--number) // 4
// console.log(number) // 4






// постфиксная форма срабатывает после следующего обращения к переменной!
// let number = 5;
// console.log(number--) // 5
// console.log(number) // 4

// Немного более сложный пример
// let number1 = 10; // создается переменная
// let number2 = 5; // создается переменная
// let result = number1++ + number2; // создается и определяется переменная
// console.log(result); // 15
// console.log(number1); // 11




// чему будет равен result?
// чему будет равен number1 при следующем вызове?
// console.log(result); // 15
// console.log(number1); // 11











 
// let isSun = true;

// while (condition) {
//   // код
//   // также называемый "телом цикла"
// }




// while (true) {
//     console.log('hello ;-)');
// }



// let i = 0;
// while (i < 5) { // true
//   console.log(i);
//   i++;
// }
















// let i = 0;
// do {
//  console.log(i++);
// } while (i <= 10);






// Цикл сначала выполнит тело, 
// а затем проверит условие condition, 
// и пока его значение равно true, 
// он будет выполняться снова и снова.











// for (начало; условие; шаг) {
//   // ... тело цикла ...
// }








// for (start; condition; step) {
//     loop body (actions)
// }



// for (let i = 0; i < 3; i++) {
//   console.log(i); // выведет 0, затем 1, затем 2
// }

// Подробнее:
// начало	let i = 0	Выполняется один раз при входе в цикл
// условие	i < 3	Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
// тело	alert(i)	Выполняется снова и снова, пока условие вычисляется в true.
// шаг	i++	Выполняется после тела цикла на каждой итерации перед проверкой условия.

// Алгоритм:
// Выполнить начало
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → (Если условие == true → Выполнить тело, Выполнить шаг)
// → ...


// // Выполнить начало
// let i = 0;
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// // Если условие == true → Выполнить тело, Выполнить шаг
// if (i < 3) { alert(i); i++ }
// ...конец, потому что теперь i == 3



// Встроенное объявление переменной
// for (let i = 0; i < 3; i++) {
//   console.log(i); // 0, 1, 2
// }
// console.log(i); // ошибка, нет такой переменной






// let i = 'hello';
// for (let i = 1; i <= 5; i++) {
//  console.log(i);
// }
// console.log('last i', i);







// for (let i = 0; i <= 100; i += 10) {
//  console.log(i);
// }
// 1 - инициализация
// 2 - если значение подходит условию
// 3 - тело выполняется
// 4 - затем происходит шаг




// for (let i = 1; i <= 100; i += 10) {
//   // if (i <= 51) {
//   //  console.log(i); // 1 11 21 31 41 51
//   // }
//   // console.log(i);
//   // if (i === 51) break;
//   // if (i !== 51) continue;
// }






// Задачи


// 1) Какое последнее значение выведет этот код? Почему?

// let i = 3; // присвоили
// while (i) { // 3 сначала --> 2 ---> 1 --> 0 == false
//   console.log( i-- ); // 3, 2, 1
// }





// 2) Какие значения выведет цикл while?

// Префиксный вариант ++i
// let i = 0; // инициализировали
// while (++i < 5) { // 1, 2, 3, 4 
// 	console.log( i ); // 1, 2, 3, 4
// } 

// Постфиксный вариант i++
// let i = 0;
// while (i++ <= 5) { 
// 	console.log( i ); 
// } 









// let i = 10;
// while (--i > 5) { // 9, 8, 7, 6, (5 > 5) == false
// 	console.log( i ); // 9, 8, 7, 6
// } 





// let i = 10;
// while (i-- >= 5) { // 10, 9, 8, 7, 6, 5 
// 	console.log( i ); // 9, 8, 7, 6, 5, 4
// } 









// 3) Какие значения выведет цикл for?

// Постфиксная форма:
// for (let i = 0; i < 5; i++) {
// 	console.log( i );
// }

// Алгоритм
// 0. Создаем счетчик
// 1. Проверяем условие
// 2. Выполняем тело цикла
// 3. Итерируем счетчик

// 0
// 1
// 2
// 3
// 4


// Префиксная форма:
// for (let i = 0; i < 5; ++i) console.log( i );
// for (let i = 0; i < 5; i++) console.log( i );
// 0, 1, 2, 3, 4, 