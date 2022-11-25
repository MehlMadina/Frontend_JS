const customers = [
    {
        id: 1,
        firstName: "Ivan",
        lastName: "Alekseev" 
    },
    {
        id: 2,
        firstName: "Arsen",
        lastName: "Iusupov"
    },
    {
        id: 3,
        firstName: "Sam",
        lastName: "Tyler"
    },
    {
        id: 4,
        firstName: "Jack",
        lastName: "Rocky"
    },
    {
        id: 5,
        firstName: "Kendrick",
        lastName: "Lamaar"
    },
    {
        id: 6,
        firstName: "John",
        lastName: "Lennon"
    },
    {
        id: 7,
        firstName: "Paul",
        lastName: "McCartney"
    }
]

const orders = [
    {
        id: 1,
        customerId: 3,
        date: "02/03/2022",
        delivered: true,
        products: [
            {productId: 567, price: 2000},
            {productId: 789, price: 3000} // 5000
        ],
        // имя клиента
        // фамилия клиента
    },
    {
        id: 2,
        customerId: 5,
        date: "05/08/2022",
        delivered: false,
        products: [
            {productId: 413, price: 2500},
            {productId: 124, price: 1000} // 3000
        ]
    },
    {
        id: 3,
        customerId: 1,
        date: "05/12/2021",
        delivered: true,
        products: [
            {productId: 500, price: 1500},
            {productId: 213, price: 1500}
        ]
    },
    {
        id: 4,
        customerId: 6,
        date: "10/07/2022",
        delivered: true,
        products: [
            {productId: 531, price: 1000},
            {productId: 231, price: 2500}
        ]
    },
    {
        id: 5,
        customerId: 6,
        date: "10/08/2022",
        delivered: false,
        products: [
            {productId: 912, price: 5000},
            {productId: 942, price: 500}
        ]
    },
    {
        id: 6,
        customerId: 2,
        date: "10/08/2022",
        delivered: true,
        products: [
            {productId: 545, price: 2300},
            {productId: 942, price: 800}
        ]
    },
    {
        id: 7,
        customerId: 7,
        date: "05/09/2022",
        delivered: true,
        products: [
            {productId: 600, price: 2000},
            {productId: 849, price: 900}
        ]
    },
    {
        id: 8,
        customerId: 1,
        date: "10/10/2022",
        delivered: true,
        products: [
            {productId: 575, price: 2400},
            {productId: 248, price: 850}
        ]
    },
]

// вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые
// заказал пользователь
// У одного пользователя может быть несколько заказов.

// const currentCustomerId = customers.find(
//   (customer) => customer.firstName == "Sam" && customer.lastName == "Tyler"
// ).id; // get id

// const currentCustomerProd = orders.find(
//   (order) => order.customerId == currentCustomerId
// ).products;
// console.log(currentCustomerProd);


// метод find похож на filter, но возвращает только один элемент из массива.
// метод find возвращает первый найденный элемент, который соответсвтует нашему запросу

// ДЗ. Сделайте так, что у пользователя может быть несколько заказов. [{} {}], [{} {}] ---> [{} {} {} {}]


// const findProductsByPerson = (name, surname) => {
//   const currentCustomerId = customers.find(
//     (customer) => customer.firstName == name && customer.lastName == surname
//   ).id;  // находит id пользовател по имени и фамилли

//   return orders.find((order) => order.customerId == currentCustomerId).products;
// };

// console.log(findProductsByPerson("Sam", "Tyler"));



// Добавить к каждому объекту заказов(orders) свойства firstName и lastName пользователя и вернуть новый массив
// , котрый сделал заказ.
// В новом массиве будут объекты с заказами, в которых будет указаны имя и фамилия пользователя,
    // который сделал заказ


// const result = orders.map((order) => {
//   const { firstName, lastName } = customers.find(
//     (customers) => customers.id === order.customerId
//   )
//   return {
//     ...order,
//     firstName,
//     lastName
//   };
// });

// console.log(result);

// Вместе.У всех ли заказов, сумма заказанных товаров больше чем 2000. Если больше 2000 - true, если меньше false
// Задача. Вернуть массив заказов, сумма заказанных продуктов которых больше чем 2000.
// Если сумма заказанных продуктов больше 2000, то возвращаем объект в новый массив


/* 
    Array.prototype.every() - метод позволяет узнать, все ли элементы массива удовлетворяют условию
    Если все элемнты удовлетворяют условию - вернется true
    Если не все элементы удовлетворяют условию - вернется false
    Array.prototype.some() - метод позволяет узнать, есть ли хоть один элемент, который подходит под условия
    Если хоть один элемент удовлетворяют условию - вернется true
    Если ни один элемент не удовлетворяет условию - вернется false
*/

// const result = orders.filter(order => {
//     return order.products.reduce((sum, current) => sum + current.price, 0) > 2000
// }).length == orders.length;
// console.log(result);


// const isMore = orders.every(order => order.products.reduce((sum, current) => sum + current.price, 0) > 2000);
// console.log(isMore);


// Заказал ли пользователь с id 4 хоть что-то. Есть ли заказ в массиве orders, который заказал юзер с id 4.

const result = (userId) => {
    return orders.some(order => order.customerId === userId)
}

console.log(result(4));
console.log(result(1));


// Есть ли в списке хоть один элемент, который больше 50. 
// let arr = [10, 20, 30, 40, 50]

// let result = arr.some(num => num > 50) // true
// console.log(result)


// ДЗ. Написать функцию, которая принимает имя и фамилию пользователя и возвращает 
// true, если пользователь с таким именем делал заказ
// false, если пользователь с таким именем ничего не заказывал

// ДЗ. Вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые заказал пользователь
// Написать функцию, которая принимает имя и фамилию и возвращает массив продуктов, 
// которые заказал этот пользователь. У одного пользователя может быть несколько заказов.
// Итоговый массив должен быть одномерным. То есть должен содержать только объекты продуктов. 

// ДЗ. Написать функцию, которая возрващает массив пользователей, которые ничего не заказали.
