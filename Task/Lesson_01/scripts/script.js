// Callback

// function showInConsole(callback, number) {   // 2. vizivaem s peredannimi param
//    const mathResult = callback(number);  // 3. - zdes callback(number) eto square(10)
    // 6. - v mathResult sohranyaem rezultat vizova square(10)
//    console.log(mathResult); // vivodim rezultat v konsol
// }


// function square(numberSquare) { // 4. vizivaem i 
//     return numberSquare * numberSquare  // 5. vozvrachaem iz finkzii resultat
// }


// showInConsole(square, 10);  // 1. peredaem v showInConsole 2 parametra
//  square - opisaniye funkzii
// f square(numberSquare) {
//   return   numberSquare * numberSquare
//}
// i chislo

// console.log(square(54));


// gde-to v drugom meste
// function calsSquareToSquare(number) {
//     let result = square(square(number));
//     return result
// }
// console.log(calsSquareToSquare(5));
// showInConsole(calsSquareToSquare, 5);

// ==========================================================================================================================================


// usloviya + &&  ||


// 'hello'.length // 5
// console.log('hello'.length);


// function stringLengthDetector(value) {  // uznat chto za tip dannich
//     if (typeof value === 'string') {
//         return value.length;
//     }
//     if (typeof value === 'number' || typeof value === 'boolean') {
//         return String(value).length;
//     }
// }
// console.log(stringLengthDetector('Hello, world!'));
// console.log(stringLengthDetector(1596347));
// console.log(stringLengthDetector(false));


// if (false || false || false || false || true) {
//     // srabotayet esli hot odno virajeniye istinno
// }


// if (true && true && true && true && false) {
//     // nesrabotayet esli est hot odna loj
// }

// ========================================================================================================================================

// stroki

// .length - dlina perebirayemogo znacheniya (stroki, massiva)
//  [0]  - indeksi
// console.log(
//     'HeLlo'.length,
//     'HeLlo' [0],
//     'HeLlo' [1],
//     'HeLlo' [2],
//     'HeLlo' [3],
//     'HeLlo' [4],
// );


// let hello = 'Hello, World';
// let helloLength = hello.length;
// let helloUpperCase = hello.toUpperCase();
// let index4Upper = hello[4].toUpperCase();  // 'O'
 
// console.log(helloUpperCase);












// МАССИВЫ
// Массивы это упорядоченные данные
// Базовый синтаксис

// let arr = new Array();
// let arr = [];
// console.log(arr)



// let fruits = [
// 	"Яблоко", // индекс - 0
// 	"Апельсин", // индекс - 1
// 	"Слива" // индекс - 2
// ];

// let apple = fruits[0]; // Яблоко 
// console.log( fruits ); 
// console.log( fruits.length );
// console.log( apple ); // Яблоко
// console.log( fruits[1] ); // Апельсин
// console.log( fruits[2] ); // Слива

// console.log( fruits ); 
// // Можно заменить или добавить элемент к массиву
// fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
// console.log( fruits ); 

// fruits[3] = 'Лимон'; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]

// console.log( fruits ); 


// let randomTypesValue = [
// 	"hello", // индекс - 0
// 	3000, // индекс - 1
// 	"100" // индекс - 2
// ];
// console.log(randomTypesValue)
// randomTypesValue[1] = randomTypesValue[1] - 1000;
// console.log(randomTypesValue)




// Общее число элементов массива содержится в его свойстве length
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// console.log( fruits.length ); // 3


// Вывести массив целиком
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// console.log( fruits ); // Яблоко, Апельсин, Слива




// В массиве могут храниться элементы любого типа.
// разные типы значений
// let arr = [ 
// 	'Яблоко', // 0 - строка
// 	[
// 		'лошадь', 
// 		'собака', 
// 		[
// 			123, 
// 			567,
// 		]
// 	], // 1 - массив
// 	true, // 2 - булева истина
// 	function() { // 3 - функция
// 		return 'А это функция';
// 	}
// ];
// // получить элемент с индексом 3 (функция) и выполнить её
// console.log(arr[1][2][1]);
// console.log(arr[3]()); // vizov funkzii
// console.log(arr[1][2][0]); // vizov funkzii







// Методы pop/push, shift/unshift


// push добавляет элемент в конец
// let fruits = [
// 	"Яблоко", 
// 	"Апельсин"
// ];

// // let fruitsLenght = fruits.length; // 2
// // fruits[fruitsLenght] = "Груша";
// // VS

// console.log(fruits);  // Yablako, Apelsin
// fruits.push('Grusha');

// console.log(fruits);
 
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// let lengthUpdated = fruits.push("Dinya");
// console.log(lengthUpdated, fruits);  // "Яблоко", "Апельсин", "Груша", "Dinya"


// pop удаляет последний элемент
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// fruits.pop();    || let deletedElement = fruits.pop();
// console.log( fruits ); // Яблоко, Апельсин  || console.log(deletedElement, fruits);



// console.log( fruits.pop() ); // удаляем "Груша" и выводим его
// console.log( fruits ); // Яблоко, Апельсин


// дополнительные фишки pop и push

// let arr = [
// 	'Ilya',
// 	'Tamara',
// 	'Georgi',
// ]

// let updatedArrLength = arr.push('Vlad');
// console.log(updatedArrLength);
// // когда элемент добавляется то побочным свойством метода push  
// // (конкретно его return) он возвращает новую length массива

// let removedElement = arr.pop();
// console.log(removedElement);
// // когда элемент удаляется то побочным свойство метода pop
// // (конкретно его return) он возвращает этот удаленный элемент


















// shift удаляет элемент в начале, сдвигая очередь, 
// так что второй элемент становится первым
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// console.log( fruits.shift() ); // удаляем Яблоко и выводим его
// console.log( fruits ); // Апельсин, Груша

// unshift добавляет элемент в начало массива
// let fruits = ["Апельсин", "Груша"];
// fruits.unshift('Яблоко');
// console.log( fruits ); // Яблоко, Апельсин, Груша






// внутреннее устройство массивов
// let fruits = [
// 	"Банан"
// ];
// let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
// console.log( arr === fruits ); // true
// arr.push("Груша"); // массив меняется по ссылке
// console.log( fruits ); // Банан, Груша - теперь два элемента






// Перебор элементов
// Одним из самых старых способов перебора элементов массива 
// является цикл for по цифровым индексам:

// let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] === 'Апельсин') {
// 		arr[i] = 'Киви';
// 	}
// 	console.log(arr[i]); // 0 - Яблоко, 1 - Апельсин, 2 - Груша
// }

// console.log(arr);

// для массивов возможен и другой вариант цикла, for..of:
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// // проходит по значениям
// for (let fruit of fruits) {
//   console.log( fruit );
// }





// Немного о «length»
// Свойство length автоматически обновляется при изменении массива. 
// Если быть точными, это не количество элементов массива, 
// а наибольший цифровой индекс плюс один.

// Например, единственный элемент, имеющий большой индекс, даёт большую длину:
// let fruits = [];
// fruits[123] = "Яблоко";
// console.log( fruits ); // 124



// Ещё один интересный факт о свойстве length – его можно перезаписать
// Если мы вручную увеличим его, ничего интересного не произойдёт. 
// Зато, если мы уменьшим его, массив станет короче. 
// Этот процесс необратим, как мы можем понять из примера:

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // укорачиваем до двух элементов
// console.log( arr ); // [1, 2]

// arr.length = 5; // возвращаем length как было
// console.log( arr[3] ); // undefined: значения не восстановились









// Многомерные массивы
// Массивы могут содержать элементы, которые тоже являются массивами. 
// Это можно использовать для создания многомерных массивов, например, для хранения матриц:
// let matrixBlablabla = [
//   [1, 2, 3], // 0
//   [4, 5, 6], // 1
//   [7, 8, 9]  // 2
// ];
// console.log( matrixBlablabla[1][1] ); // 5, центральный элемент




// ================== TASKS ================================================



// let fruits = ["Apple", "Pear", "Orange"];
// let shoppingCart = fruits;
// shoppingCart.push("Banana");


// Sdelayte funkziu inArray, kotoraya opredelyaet, est v massive element
// s zadannim tekstom ili net. Funkziya pervim parametrom doljna prinimat tekst elementa, 
// a vtorim massiv, v kotorom delayetsa poisk.
// Funkziya doljna vozvrachat true ili false.

function inArr(textElement, arr) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element === textElement) {return true; 
    }
}
    return false;
}

let arr1 = [
    5,
    6,
    'Maria',
    '1234',
    true
]

console.log(inArr('Ivan', arr1));
console.log(inArr('1234', arr1));