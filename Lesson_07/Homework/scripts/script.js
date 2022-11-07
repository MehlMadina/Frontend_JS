// 1. Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:


let user = {
   name: 'John',
   age: 30
};


let count = obj => Object.keys(obj).length;

console.log(count(user));  // 2




// 2. Максимальная зарплата
// У нас есть объект salaries с зарплатами:


let salaries = {
   "John": 100,
   "Peter": 300,
   "Mary": 250
};


// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.


let topSalary = salaries => {

    let max = 0;
    let maxName = null;
  
    for(let [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  };

  console.log(topSalary(salaries));  // Peter

