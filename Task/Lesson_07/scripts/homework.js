// ДЗ. Написать функцию, которая принимает имя и фамилию пользователя и возвращает
// true, если пользователь с таким именем делал заказ
// false, если пользователь с таким именем ничего не заказывал

// ДЗ. Вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые заказал пользователь

// Написать функцию, которая принимает имя и фамилию и возвращает массив продуктов,
// которые заказал этот пользователь. У одного пользователя может быть несколько заказов.
// Итоговый массив должен быть одномерным. То есть должен содержать только объекты продуктов.

// ДЗ. Написать функцию, которая возрващает массив пользователей, которые ничего не заказали.

const customers = [
  {
    id: 1,
    firstName: "Ivan",
    lastName: "Alekseev",
  },
  {
    id: 2,
    firstName: "Arsen",
    lastName: "Iusupov",
  },
  {
    id: 3,
    firstName: "Sam",
    lastName: "Tyler",
  },
  {
    id: 4,
    firstName: "Jack",
    lastName: "Rocky",
  },
  {
    id: 5,
    firstName: "Kendrick",
    lastName: "Lamaar",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Lennon",
  },
  {
    id: 7,
    firstName: "Paul",
    lastName: "McCartney",
  },
];

const orders = [
  {
    id: 1,
    customerId: 3,
    date: "02/03/2022",
    delivered: true,
    products: [
      { productId: 567, price: 2000 },
      { productId: 789, price: 3000 },
    ],
  },
  {
    id: 2,
    customerId: 5,
    date: "05/08/2022",
    delivered: false,
    products: [
      { productId: 413, price: 2500 },
      { productId: 124, price: 1000 },
    ],
  },
  {
    id: 3,
    customerId: 1,
    date: "05/12/2021",
    delivered: true,
    products: [
      { productId: 500, price: 1500 },
      { productId: 213, price: 1500 },
    ],
  },
  {
    id: 4,
    customerId: 6,
    date: "10/07/2022",
    delivered: true,
    products: [
      { productId: 531, price: 1000 },
      { productId: 231, price: 2500 },
    ],
  },
  {
    id: 5,
    customerId: 6,
    date: "10/08/2022",
    delivered: false,
    products: [
      { productId: 912, price: 5000 },
      { productId: 942, price: 500 },
    ],
  },
  {
    id: 6,
    customerId: 2,
    date: "10/08/2022",
    delivered: true,
    products: [
      { productId: 545, price: 2300 },
      { productId: 942, price: 800 },
    ],
  },
  {
    id: 7,
    customerId: 7,
    date: "05/09/2022",
    delivered: true,
    products: [
      { productId: 600, price: 2000 },
      { productId: 849, price: 900 },
    ],
  },
  {
    id: 8,
    customerId: 1,
    date: "10/10/2022",
    delivered: true,
    products: [
      { productId: 575, price: 2400 },
      { productId: 248, price: 850 },
    ],
  },
];

// 1. Написать функцию, которая принимает имя и фамилию пользователя и возвращает
// true, если пользователь с таким именем делал заказ
// false, если пользователь с таким именем ничего не заказывал

const checkOrder = (name, surname) => {
  const currentCustomerId = customers.find(
    ({ firstName, lastName }) => firstName === name && lastName === surname
  ).id;

  return orders.some(({ customerId }) => customerId === currentCustomerId);
};

console.log(checkOrder("Sam", "Tyler"));
console.log(checkOrder("Jack", "Rocky"));



// 2. Вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые заказал пользователь
// Написать функцию, которая принимает имя и фамилию и возвращает массив продуктов,
// которые заказал этот пользователь. У одного пользователя может быть несколько заказов.
// Итоговый массив должен быть одномерным. То есть должен содержать только объекты продуктов.

const arrayWithProd = (name, surname) => {
  const userId = customers.find(
    ({ firstName, lastName }) => firstName === name && lastName === surname
  ).id;
  const ordersId = orders.filter(({ customerId }) => customerId === userId);
  return ordersId.map(({ products }) => products).flat();
};

console.log(arrayWithProd("Sam", "Tyler"));
console.log(arrayWithProd("Ivan", "Alekseev"));



// 3. Написать функцию, которая возрващает массив пользователей, которые ничего не заказали.

const customWithoutOrd = (arr1, arr2) =>
  arr1.filter(({ id }) => arr2.every(({ customerId }) => customerId !== id));

console.log(customWithoutOrd(customers, orders));



// let notOrderedUsers = (customers, orders) => {
//   return customers.filter(
//     (customer) => (!orders.find( order => order.id === customer.id)
//   ));
// };

// console.log(notOrderedUsers(customers, orders));