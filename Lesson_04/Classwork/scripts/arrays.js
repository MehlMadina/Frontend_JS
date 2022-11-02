// ЗАДАЧИ

// 1) Что выведет следующий код?

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// console.log( fruits.length ); // ?

// 2) 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика».
// Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Подсказка - функция округления Math.floor(то, что нужно округлить)
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// 3) напишите функцию, которая
// принимает как аргумент массив
// и возвращает сумму всех чисел, которые в нем есть
// или если чисел нет, то возвращает ноль

// let sumArraysNumbers = function(array) {
//     let acamulate = 0;
//     let counter = 0;

//     for (let i = 0; i < array.length; i++) {
//         let arrElement = array[i];

//         if (/*typeof Number(arrElement) === 'number' &&*/ !isNaN(arrElement)) {
//             acamulate+= Number(arrElement);
//             counter++;
//         }
//     }
//     return [
//         acamulate,
//         array.length,
//         counter
//     ];
// }
// let array2 = [
//     1,
//     2,
//     '3',
//     'John',
//     3
// ]

// console.log(sumArraysNumbers(array2));
// console.log(Number('3'));
// console.log(Number('John'));

// МАССИВЫ УГЛУБЛЕННЕЕ
// Больше методов массивов

// мы уже знаем
// arr.push(items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(items) – добавляет элементы в начало.

// Удаление элемента из массива - splice

// arr.splice(index[, deleteCount, elem1, ..., elemN])

// Он начинает с позиции index,
// удаляет deleteCount элементов и вставляет
// elem1, ..., elemN на их место.
// Возвращает массив из удалённых элементов

// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
// console.log( arr ); // осталось ["Я", "JavaScript"]

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 3 первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");
// console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 2 первых элемента
// let removed = arr.splice(0, 2);
// console.log( removed ); // "Я", "изучаю" <-- массив из удалённых элементов

// Метод splice также может вставлять элементы без удаления,
// для этого достаточно установить deleteCount в 0:

// let arr = ["Я", "изучаю", "JavaScript"];
// // с позиции 2
// // удалить 0 элементов
// // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");

// console.log( arr ); // "Я", "изучаю", "сложный", "язык", "JavaScript"

// более простое удаление - slice
// arr.slice([start], [end])

// Он возвращает новый массив,
// в который копирует элементы,
// начиная с индекса start и до end (не включая end)

// let arr = ["t", "e", "s", "t"];
// let arr2 = arr.slice(1, 3); // e,s (копирует с 1 до 3)
// let arr3 = arr.slice(-2); // s,t (копирует с -2 до конца)

// Можно вызвать slice и вообще без аргументов:
// let arrClone = arr.slice() // создаёт копию массива arr
// Это часто используют, чтобы создать копию массива для дальнейших преобразований,
// которые не должны менять исходный массив.

// объединение массивов в новый - concat
// arr.concat(arg1, arg2) //синтаксис

// Он принимает любое количество аргументов,
// которые могут быть как массивами,
// так и простыми значениями.

// let arr = [1, 2];
// // // создать массив из: arr и [3,4]
// console.log( arr.concat([3, 4]) ); // [1,2,3,4]
// // // создать массив из: arr и [3,4] и [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // [1,2,3,4,5,6]
// // // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// console.log( arr.concat([3, 4], 5, 6) ); // [1,2,3,4,5,6]

// let string = 'test';
// let arr = string.split('');  // ['t', 'e', 's', 't']

// let comebackStr = arr.join(' ');
// console.log(comebackStr);


// ============================// TASKS // ==============================================================

// let arr = [];
// let strForPush = 'x';
// for (let i = 0; i < 10; i++) {
//      arr.push(strForPush);

// }

// console.log(arr);




// function getPush(what, count) {

//   let arr = [];
//   for (let i = 0; i < count; i++) {
//     arr.push(what);
//   }
//   return arr;
// }

// console.log(getPush('m', 4));




// let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12];

// let rangeFilter = function (arr, min, max) {
//     let arrNew = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > min && arr[i] < max) {
//           arrNew.push(arr[i]);  
//         }
//     } 
//     return arrNew;
// };

// console.log(rangeFilter(arr, -10, 10));



// Сделайте функцию howManyToTen, которая будет принимать массив с числами и возвращать
// количество элементов массива, которых нужно сложить, начиная с первого, чтобы получить число
// больше 10.

// let arr = [1, 2, 4, -3, 8, 7, 0, -5, 18, 12];

// let howManyToTen = function(arr) {   // 1. poluchili massiv v funkzii
//     let sum = 0;                     // 2. zavodim summu
//     for (let i = 0; i < arr.length; i++) {  // 3. iteriruem massiv s 0 indeksa
//         sum += arr[i]; // 4. Schitaem summu
//         if (sum > 10) {  // esli summa bolshe 10
//             return i+1;  // 5. vihodim iz funkzii i vozvrachaem tekuchuyu iteraziu + 1
//         } // to est kolichestvo elementov massiva, kotorie mi slojili
//     }
//     return 'Summa ne bolshe 10' // 6. eslo massiv ne daet summi > 10 to 
// }; // prosto vozvrachaem etu stroku
// console.log(howManyToTen());  // Vizov funkzii c massiva



// Dan massiv s chislami. Sozdayte iz nego noviy massiv, gde ostanutsa lejat tolko 
// polojitelniye chisla. Sozdayte dlya etogo vspomogatelnuyu funkziu isPositive(),
// kotoraya parametrom budit prinimat chislo i vozvrachat true, esli chislo polojitelnoye,
// i false esli otrizatelnoye.

// let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12];

// let isPositive = number => number > -1

// {
//     if(number < 0) {
//         return false;
//     } else {
//         return true
//     }
// }

let positiveFilter = arr => {

    let possitiveArr = [];

    for (let i = 0; i < arr.length; i++) {
        if(isPositive(arr[i])) {
            possitiveArr.push(arr[i]);
        }
    } 

    return possitiveArr;
}
console.log(positiveFilter(arr));










// Перебор: forEach
// Метод arr.forEach позволяет запускать функцию для каждого элемента массива

// Его синтаксис:
// arr.forEach(
// 		function(item, index, array) {
// 	  // ... делать что-то с item
// 		}
// );

// Например, этот код выведет на экран каждый элемент массива:
// Вызов console.log для каждого элемента
// ["Bilbo", "Gandalf", "Nazgul"].forEach(
// 	(item, index, array) => {
// 	  console.log(`${item} имеет позицию ${index} в ${array}`);
// 	  console.log(array);
// 	}
// );

// includes - Поиск в массиве
// arr.includes(item, from) – ищет item, начиная с индекса from,
// и возвращает true, если поиск успешен.

// let arr = [1, 0, false];
// console.log( arr.includes(1) ); // true

// const arr = [NaN];
// console.log( arr.includes(NaN) );// true (верно)

// углубленный поиск в массиве find
// Представьте, что у нас есть массив массивов.
// Как нам найти вложенный массив с определённым условием?

// Здесь пригодится метод arr.find.
// Его синтаксис таков:
// let result = arr.find(
// 		function(item, index, array) {
// 	  // если true - возвращается текущий элемент и перебор прерывается
// 	  // если все итерации оказались ложными, возвращается undefined
// 	}
// );

// Функция вызывается по очереди для каждого элемента массива:
// item – очередной элемент.
// index – его индекс.
// array – сам массив.
// Если функция возвращает true, поиск прерывается и возвращается item.
// Если ничего не найдено, возвращается undefined.

// Например, у нас есть массив c массивами пользователей,
// каждый из которых имеет первым элементом фамилию, вторым имя.
// Попробуем найти того, кто с фамилией Агранова

// let users = [
//   ['Иванов', "Вася"],
//   ['Петров', "Петя"],
//   ['Агранова', "Соня"],
// ];

// let user = users.find(item => item[0] == 'Агранова');

// console.log(user); //

// отфильтровать массив - filter
// Синтаксис этого метода схож с find, но
// filter возвращает массив из всех подходящих элементов

// let results = arr.filter(function(item, index, array) {
//   // если true - элемент добавляется к результату, и перебор продолжается
//   // возвращается пустой массив в случае, если ничего не найдено
// });

// let users = [
//   ['Иванов', "Вася"],
//   ['Агранова', "Петя"],
//   ['Агранова', "Маша"],
// ];

// // // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item[0] === 'Агранова');

// console.log(someUsers); //

// Преобразование массива
// map
// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива
// и возвращает массив результатов выполнения этой функции.

// Синтаксис:
// let result = arr.map(function(item, index, array) {
//   // возвращается новое значение вместо элемента
// });
// Например, здесь мы преобразуем каждый элемент в его длину:
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// let arrMapping = arr.map(
// 	function(item) {
// 		if (item === "Nazgul") {
// 			return "Hobbit"
// 		}
// 		return item
// 	}
// )

// console.log(arrMapping)

// console.log(lengths); // 5,7,6

// split и join - разбивка и соединение строк в массивы

// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');

// for (let name of arr) {
//   console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }

// У метода split есть необязательный второй числовой аргумент
// – ограничение на количество элементов в массиве.
// Если их больше, чем указано, то остаток массива будет отброшен.
// На практике это редко используется:

// let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);
// console.log(arr); // Вася, Петя

// Разбивка по буквам
// Вызов split(s) с пустым аргументом s разбил бы строку на массив букв:
// let str = "тест";
// console.log( str.split('') ); // т,е,с,т

// Вызов arr.join(glue) делает в точности противоположное split.
// Он создаёт строку из элементов arr, вставляя glue между ними.

// Например:
// let arr = ['Вася', 'Петя', 'Маша'];
// let str = arr.join(' '); // объединить массив в строку через ;

// console.log( str ); // Вася;Петя;Маша

// Итого
// Шпаргалка по методам массива:

// Для добавления/удаления элементов:

// push (...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

// Для поиска среди элементов:
// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.

// Для перебора элементов:
// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

// Для преобразования массива:
// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

// Дополнительно:
// Array.isArray(arr) проверяет, является ли arr массивом.

// Последнее - синтаксический сахар
// деструктуризация массива

// синтаксис для массива:
// let [item1 = default, item2, ...rest] = array

// Первый элемент отправляется в item1;
// второй отправляется в item2,
// все остальные элементы попадают в массив rest.

// Можно извлекать данные из вложенных объектов и массивов,
// для этого левая сторона должна иметь ту же структуру, что и правая.

// Пример деструктуризации массива:

// // у нас есть массив с именем и фамилией

// let arr = ["Ilya", "Kantor"]
// let [firstName, surname] = arr;

// console.log(firstName)
// console.log(surname)
// // деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]

// console.log(firstName); // Ilya
// console.log(surname);  // Kantor

// оператор rest - Остаточные параметры «…»
// Если мы хотим не просто получить первые значения,
// но и собрать все остальные, то мы можем добавить ещё один параметр,
// который получает остальные значения, используя оператор
// «остаточные параметры» – троеточие ("..."):

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(name1); // Julius
// console.log(name2); // Caesar
// console.log(rest); // ["Consul", "of the Roman Republic"]

// // Обратите внимание, что `rest` является массивом.
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest.length); // 2

// Фильтрация по диапазону

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)

// Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]
