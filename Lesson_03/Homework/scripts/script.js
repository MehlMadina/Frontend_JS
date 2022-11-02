// Напишите функцию, которая будет проверять тип данных (typeof someValue) и если
// это будет строка, то проверять сколько в ней символов, возвращать (return) результат 
// (количество символов в строке - число).


// Количество символов в строке можно узнать применив к строке свойство length через точку. 
// Например выражение 'Hello'.length вернет число 5, если вы вызовите его через консоль, аналогично 
// и для переменной, которая содержит строку. Например:


// let someString = 'Hello';
// console.log(someString.length) // 5


// если это значение присланное в функцию будет число, то его нужно переводить в строку (String(someValue)) 
//и возвращать из функции количество символов в этой преобразованной из числа строке.


// если это значение присланное в функцию будет boolean - true или false, то его нужно переводить 
//в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованном из boolean значения строке.


// если тип данных не строка и не число и не boolean, то функция должена вернуть строку  'неверный тип данных'



// Declaration Function
console.log(dataType('Hello, world'));
console.log(dataType(1233654));
console.log(dataType(false));
console.log(dataType(undefined));

function dataType(value) {
    if (typeof value === 'string') {
      return value.length;  
    }
    if (typeof value === 'number' || typeof value === "boolean") {
        return String(value).length;
    } else {
        (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') 
        return 'Invalid data type!';
    }
}

    

// Реализуйте функцию из первой задачи во всех трех синтаксисах функций - декларативно, как выражение и как стрелочную функцию.

// Прокомментируйте аргументированно почему на Ваш взгляд один из способов описания функции предпочтительнее.



// Expression Function
let dataTypeExp = function (value) {
    if (typeof value === 'string') {
        return value.length;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value).length;
    } else {

        return 'Invalid data type!'
    }
}

console.log(dataTypeExp('Hello, Madina'));
console.log(dataTypeExp(3369654));
console.log(dataTypeExp(true));
console.log(dataTypeExp(undefined));





// Arrow Function

// Мне предпочтительнее использовать стрелочные функции. 
// Так как они компактнее и более читабельны.

let dataTypeArrow = (value) => {
    if (typeof value === 'string') {
        return value.length;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value).length;
    } else {
        
        return 'Invalid data type!'
    }
}

console.log(dataTypeArrow('Hello, Madina'));
console.log(dataTypeArrow(1233369654));
console.log(dataTypeArrow(true));
console.log(dataTypeArrow(null));