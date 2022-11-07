// Сравнить две константы двумя разными способами: 
// - Создать две константы, присвоив одной значение строкового типа, а второй числового
// - Сравнить эти константы и вывести в консоль результат типа boolean так, чтобы
// в одном случае ( == ) он был true, а в другом ( === ) false


const string = '35';
const number = 35;

console.log(string == number);
console.log(string === number);



// - У нас есть 100 (создать константу)
// - Цена помидоров на рынке - 10 (создать константу)
// - Цена огурцов на рынке - 5 (создать константу)
// - Цена яблок на рынке - 15 (создать константу)
// - Оставшиеся деньги потратим на орехи (создать переменную)


// - Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
// - оставшиеся деньги потратили на орехи (присвоить значение переменной)

// - сколько денег мы потратили на орехи? (вывести переменную в консоль)
// - на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)


// - в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
// выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'

const sum = 100;
const tomato = 10;
const cucumber = 5;
const apple = 15;
const total = 2 * (tomato + cucumber + apple);
const nuts = sum - total;

console.log(nuts);
console.log(total > nuts);

if (nuts > total) {
    console.log(`Больше потратили на орехи ${nuts}`);
} else {
    console.log(`Больше потратили на фрукты и овощи ${total}`);
}