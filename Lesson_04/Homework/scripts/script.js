// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте
// всё как нужно и методом join соедините обратно.

function camelize(str) {
    return str
      .split("-")
      .map((word, index) => {
        if (index == 0) {
          return word;
        } else {
          word[0].toUpperCase() + word.slice(1);
        }
      })
      .join("");
  }
  
  console.log(camelize("my-short-string"));
  
  function camelize(str) {
    return str
      .split("-")
      .map((word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join("");
  }
  console.log(camelize("my-short-string"));
  
  // Задача: написать функцию, принимающую массив чисел
  // и возвращающую сумму всех его положительных элементов и отрицательных
  // чисел отдельно в виде нового массива
  
  // например функция принимает как аргумент следующий массив
  // arr = [1, -2, 3, 4, -9, 6]
  
  // и должна вернуть [14, -11]
  
  
  let getPosNegSum = (array) => {
    let positive = 0;
    let negative = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        positive += array[i];
      } else if (array[i] < 0) {
        negative += array[i];
      }
    }
    return [positive, negative];
  };
  
  console.log(getPosNegSum([1, -2, 3, 4, -9, 6]));