// console.log('Hello, world!');
// alert('Hello!');
// prompt('How are you?');


// Zaprosit u polzovatelya imya, i v uvedomlenii vivesti 'Hello' i imya, kotoroye zaprosili.

// let name = prompt('Whats your name?');
// alert('Hello ' + name);

// Sdelat tak, chtobi imya polzovatelya vsegda nachinalos s bukvi verhnego registra.
// madina

// let name = prompt('How are you?');
// let newName = name[0].toUpperCase() + name.slice(1);
// alert(newName)

// let myName = 'madina';
// console.log(myName.slice(1)); // adina



// Esli v massive arr uje suchestvuyet imya newName, to v alerte vozvrachaem "Takoe imya uje suchestvuyet!"
// inache dobavlyaem imya newName v konez massiva

// let arr = ["Ivan", "Andrey", "Anna", "Veronika"];
// // let newName = "arsen";  // "anna"
// let newName = prompt("Kogo vi hotite dobavit?");

// function checkName(name) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase() === name.toLowerCase()) {
//       alert("Takoe imya uje suchestvuyet!");
//     }
//   }
//   arr.push(name);
// }
// console.log(arr);
// checkName(newName);


// function checkNameIncludes(name) {
//     if(arr.includes(name)) {
//        return alert("Takoe imya uje suchestvuyet!");
//     }
//     arr.push(name)
// }


// let nums = [2, 4, 6, 8];  // Dobavit v massiv 10
// let newArr = nums.concat(10);
// // nums.forEach(num => num + 1)

// console.log(nums);
// console.log(newArr);





// let myName = "Arsen";
// let myName1 = "arsen";
// console.log(myName === myName1); // false
// console.log(myName.toLowerCase() === myName1.toUpperCase()); // true



// Udalit bukvi b, c, d, ispolzuya splice. Vmesto bukv bili zifri 2, 3, 4

// let arr = ["a", "b", "c", "d", "e"];
// let deleted = arr.splice(1, 3); 

// console.log(arr);
// console.log(deleted);

// let arr = ["a", "b", "c", "d", "e"];
// let deleted = arr.splice(1, 3, "2", "3", "4" ); 

// console.log(arr);
// console.log(deleted);

// Vivodit polzovatelyu stroku iz massiva. Sprashivat kakoe slovo po ocheredi on hochet udalit.
// Sprashivat kakoe slovo on hochet dobavit vmesto udalennogo i v itoge vivodit poluchennuyu stroku iz massiva.
// Iz elementov massiva sobrat predlojeniye. Vmesto tekuchego imeni v massive, dobavte vashe, ispolzuya splice.

let message = ["Hello!", "My", "name", "is", "Madina"]

let index = +prompt("Kakoe slovo po ocheredi hotite udalit? " + message.join(" ")) // promt - string
index-- // poziziya udalennogo slova
// console.log(index);
let str = prompt("Kakoye slovo vi hotite ispolzovat vmesto udalennogo?");

let result = message.splice(index, 1, str);

console.log(message.join(" "));