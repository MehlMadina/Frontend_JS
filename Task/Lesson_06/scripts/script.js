// '16000' - parseInt('16000') - 16000 number

const cars = [
    { mark : "Mercedes-Benz", model : "S600", year : "1999", price : 15000 },
    { mark : "BMW", model : "M3", year : "2002", price : 18000 },
    { mark : "Audi", model : "Q3", year : "2006", price : 14000 },
    { mark : "VW", model : "Golf-4", year : "1998", price : 8000 },
    { mark : "Toyota", model : "MarkX", year : "2005", price : 13000 },
    { mark : "Lexus", model : "RX300", year : "2007", price : 20000 },
    { mark : "Mercedes-Benz", model : "S500", year : "1995", price : 12000 },
]


// 1. Вернуть массив с маркой и моделью машины. ["Mercedes-Benz S600", "BMW M3"]

// const result = cars.map(({ mark, model }) => `${mark}, ${model}`);
// console.log(result);



// 2. Вернуть массив, в котором вместо марки и модели по отдельности будет 
// объединенная строка `Марка Модель` и все остальные свойства 
// [{ markModel : "Mercedes-Benz S600", year : "1999", price : 15000 },
//   { markModel : "BMW M3", year : "2002", price : 18000 }  

// const result = cars.map(
//     ({ mark, model, year, price }) =>
//       ({markModel: mark + model, year, price})
//   );
//   console.log(result);


// const result = cars.map(({ mark, model, ...rest }) => ({
//   markModel: mark + model,
//   ...rest,
// }));
// console.log(result);
  

// 3. Посчитать среднюю цену всех автомобилей
// средняя цена = сумма всех цен / количество автомобилей

// const avgPrice = cars.reduce((prev, { price }) => prev + price, 0) / cars.length;

// console.log(avgPrice.toFixed(2));


// let sum = 0; // InitialValue , accamulator

// for (let i = 0; i < cars.length; i++) {
//   sum += cars[i].price;
//   // sum = sum + cars[i].price;
// }

// console.log(sum / cars.length);

// 4.  Вернуть массив машин, которым меньше 20 лет.

// const result = cars.filter(({year}) => year > 2002);

// console.log(result);

// const carsFilter = cars.filter(
//   ({ year }) => new Date().getFullYear() - year < 20
// );
// console.log(carsFilter);

// Object date
// moment.js - library
// const date = new Date('11/18/2005').getFullYear();  // UTC
// const today = Date.now();
// console.log(today);
// console.log(date);

const users = [
    { name : "Arsen", bDay : "03/03/1998"},
    { name : "Ivan", bDay : "10/25/1990" },
    { name : "Alex", bDay : "07/05/1995" },
    { name : "Kostya", bDay : "02/12/2005" },
    { name : "Max", bDay : "05/07/2001" },
    { name : "Ann", bDay : "01/15/2002" },
    { name : "Julia", bDay : "09/13/2003" },
    { name : "Oksana", bDay : "10/25/2001" },
]

// 5. Кто из пользователей старше 20? Для след. года тоже должно работать

// const result = users.filter(({ bDay }) => {
//   return new Date().getFullYear() - new Date(bDay).getFullYear() > 20;
// });
// console.log(result);

// 6. Отсортировать массив с машинами по цене (от меньшей к большей)
// < (a - b)
// > (b - a)

 const sortCars = cars.sort((a, b) => a.price - b.price);
 console.log(sortCars);


// sort();

// const names = ['Max', 'Arsen', 'Julia', 'Andrey'];

// const sortedNames = names.sort();
// console.log(sortedNames);

// const nums = [1, 20, 5];

// const sortedNums = nums.sort();
// console.log(sortedNums);

// const sortedNums = nums.sort((a, b) => a - b);
// console.log(sortedNums);

