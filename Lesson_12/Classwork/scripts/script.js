
// 1. Написать скрипт, который формирует массив только из четных чисел.

const numbers = [3, 12, 4, 8, 5, 11, 34, 56, 9];

// let evenNums = numbers.filter(el=> el % 2 === 0);
// console.log(evenNums);


// 2. Используя метод reduce найти сумму чисел массива.

// const result = numbers.reduce((prev, item) => prev + item, 0);

// (12, 4) => 16
// (16, 8) => 24
// (24, 5) => 29
// (29, 11) => 40
// ......

// console.log(result);


// 3. Используя метод reduce найти сумму четных чисел.

// const result = numbers.reduce(
//     (prev, item) => prev + ((item % 2 === 0) ? item : 0),
//     0
//     );

// console.log(result);


// 4. Используя метод reduce найти наибольшее число в массиве и вывести его.

// const result = numbers.reduce((prev, item) => prev > item ? prev : item);

// console.log(result);


// function reduce(array, callback, initial) {
//   let last_call = initial;

//   for (let i = 0; i < array.length; i++) {
//     last_call = callback(last_call, array[i]);
//   }

//   return last_call;
// }

// const result = reduce(numbers, (prev, item) => (prev > item ? prev : item), 0);

// console.log(result);


const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000,
        count: 3,
        marks: [4, 3, 5, 3]
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000,
        count: 5,
        marks: [4, 3, 5, 5]
    },
    {
        id: 3,
        title: 'самокат',
        price: 15000,
        count: 2,
        marks: [3, 5, 3]
    },
    {
        id: 4,
        title: 'сноуборд',
        price: 27000,
        count: 0,
        marks: [4, 3, 5]
    },
    {
        id: 5,
        title: 'лыжи',
        price: 30000,
        count: 1,
        marks: [4]
    }
];

// 5. Используя методы массивов создайте массив из названий товаров.

// let titles = products.map(product => product.title);
// console.log(titles);


// const titles = products.map((product) => {
//   const { title } = product;
// //   const title = product.title;
//   return title;
// });

// console.log(titles);


// const titles = products.map(({title}) => {
//     return title
// });
// console.log(titles);

// const titles = products.map(({title}) => title);
// console.log(titles);


// const titles = products.map(({title, price}) => `${title} - ${price}`);
// const titles = products.map((product) => `${product.title} - ${product.price}`);
// console.log(titles);


// 6. Написать скрипт, который формирует массив только из объектов с товарами, которые стоят дешевле 26000


// const result = products.filter(({price}) => price < 26000);
// console.log(result);


// 7. Найти общую сумму товаров используя методы массивов.

// const result = products.reduce((prev, product) => prev + product.price, 0);
// console.log(result);


// 8. Используя методы массивов найти самый дорогой товар.

// const result = products.reduce((prev, item) =>
//   prev.price > item.price ? prev : item
// );
// console.log(result);


// 9. Написать процесс, который позволит сформировать массив из объектов с названием, ценой и средней оценкой.

// const result = products.map(({ id, title, price, marks }) => ({
//   id,
//   title,
//   price,
//   avg_mark: marks.reduce((a, b) => a + b) / marks.length,
// }));

// console.log(result);


// const result = products.map((product) => ({
//   id: product.id,
//   title: product.title,
//   price: product.price,
//   avg_mark: product.marks.reduce((a, b) => a + b) / product.marks.length,
// }));

// console.log(result);


// const result = products.map(({ marks, ...product }) => ({
//   ...product,
//   avg_mark: marks.reduce((a, b) => a + b) / marks.length,
// }));

// console.log(result);


// 10. Используя методы массивов найти общую стоимость всех товаров.

    // const result = products.reduce(
    // (prev, {price, count}) => prev + price * count,
    // 0
    // );
    // console.log(result);
