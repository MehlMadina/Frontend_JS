// 1) написать скрипт, который получает через prompt число и выводит в консоль
// его квадрат

// const number = prompt('Give a number:');
// console.log(number ** 2);


// const result = ('b' + 'a' + + 'c').toLowerCase();


// 2) написать скрипт, который получает два числа через prompt (два вызова)
// и выводит в консоль наибольшее

// const firstNum = +prompt("Give a number:");
// const secondNum = +prompt("Give a number:");

// if (firstNum > secondNum) {
//   console.log(firstNum);
// } else {
//   console.log(secondNum);
// }


// console.log(firstNum > secondNum ? firstNum : secondNum);


// 3) напишите функцию, которая принимает аргумент (число) и 
// возвращает true, если число четное и false в ином случае


  const check = (value) => value % 2 === 0;
  //   const check = (value) => !(value % 2);

//   console.log(check(12));
//   console.log(check(13));


// 4) написать скрипт, который формирует массив из цифр от 0 до 9.
// массив вывести в консоль

// let arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(i);
// }

// console.log(arr);


// const result = [...new Array(10)].map((_, index) => index);
// console.log(result);


// 5) написать цикл, который проходится по массиву numbers 
// и находит сумму четных чисел
// результат необходимо вывести в консоль

// const numbers = [12, 4, 3, 34, 3, 1, 5, 34];

// let even_sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     even_sum = numbers[i] % 2 === 0 ? numbers[i] : 0;
// }


// numbers.forEach(elem => even_sum += elem % 2 === 0 ? elem : 0);

// console.log(even_sum);


// Methods // =====================================



// const arr = [12, 5, -34, 2, 38, -6, 4, -32, -5, 27];

// arr.forEach((elem, index, arr) => console.log(elem, index, arr));

// arr.forEach((elem, index, arr) =>
//   console.log(`Elem = ${elem}, index = ${index}, arr = ${arr}`)
// );


// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// forEach(arr, (elem, index, arr) => console.log(elem, index, arr));


// let result = arr.map(elem => elem ** 2);
// console.log(result);



// вызвать метод map и все отрицательные числа
// преобразовать в положительные

// let negNum = arr.map(el => el > 0 ? el: -el)
//                 .forEach(el => console.log(el));
// console.log(negNum);


// const result = arr.filter(elem => elem > 0);
// console.log(result);


// используя метод filter сформируйте массив, состоящий только
// из чисел от -10 до 10

// const newArr = arr.filter(el => el >= -10 && el <= 10);
// console.log(newArr);


// const result = arr.find( el => el < 0);
// console.log(result);



// вызвать метод find, который возрващает первое слово, которое короче 7 символов

// const arr = ['велосипед', 'сaмокат', 'коньки', 'лыжи'];

// const word = arr.find(el => el.length < 7);
// console.log(word);



// const user = {
//   name: "Anatoliy",
//   lastname: "Ushanov",
//   age: 21
// };

// console.log(user.name);
// console.log(user.age);

const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000
    },
    {
        id: 2,
        title: 'самокат',
        price: 15000
    },
    {
        id: 3,
        title: 'лыжи',
        price: 25000
    },
    {
        id: 4,
        title: 'скейт',
        price: 13000
    },
    {
        id: 5,
        title: 'коньки',
        price: 7000
    }
];


// products.forEach(product => console.log(product.title));

// вызвать метод массива, который сформирует новый массив с 
// товарами, дешевле 20 тысяч

// const prod = products.filter(el => el.price < 20000);
// console.log(prod);


// вызвать метод массива и сформировать новый массив, который состоит из 
// объектов со свойствами title, price;

const result = products.map(el => (
    {
        title: el.title,
        price: el.price
    }
));
console.log(result);
