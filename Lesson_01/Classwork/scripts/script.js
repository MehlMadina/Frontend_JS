//===============================// Variables // ==========================================================

// let box; // undefined
// console.log(box);

// box = 3 + 2; // 5
// console.log(box);

// box = 7 + 3; // 10
// console.log(box);

// let box - sleva kuda sohranit 
// 5 - chto sohranit
// = - operator prisvoeniya

// =====================================================================================

// let string = 'Alex';
// let string2 = "Alex";
// let string3 = `Alex`;

// console.log(string);
// console.log(string2);
// console.log(string3);

// ===========================================================================================

// var oldVar = 123;

// =====================================================================

// let user = 'John';
// let age = 25;
// let hello = 'Hello!';

// console.log(user, age, hello);

// =============================================================================================

// const myBirthday = '18.04.1982'; // konstanta, izmenit nelzya
// let name; // menyat mojno name = 'Vlad';
// const age = 50; // izmenit uje nelzya

// ==============================================================================================

// =========================// TIPI // ==========================================

// V Java Script est 8 osnovnich tipov dannich
// 7 iz nich nazivayut "primitivnimi" tipami dannich:

// 1. number dlya lubich chisel : zelochislennich ili chisel s plavauchey tochkoy
// const number1 = 55; // type number
// const number2 = 55.53; // type number

// let firstNumber = 50; // type number
// let secondNumber = 10; // type number
// let sum = firstNumber + secondNumber; // 60

// console.log(sum);

// 2. bigint dlya zelich chisel ogromnoy dlinni
// simvol "n" v konze oznachaet , chto eto BigInt
// const BigInt = 12345678912345678912336547899n;

// 3. string dlya strok. Stroka mojet soderjat nol ili bolshe simvolov.
// '' - dlinna stroki 0 simvolov
// 'abc' - dlina stroki 3 simvola

// let message = 'hello, world!';
// let message2 = '';

// 4. boolean  dlya true/false ,logicheskie znacheniya
// let isLoginUser = false; // type boolean
// isLoginUser = true; // type boolean
 
// 5. null dlya neizvestnich znacheniy - otdelniy tip, imeuchiy odno znachenie null.

// 6. undefined dlya neprisvoenich znacheniy - otdelniy tip, imeuchiy odno znachenie undefined.

// 7. symbol dlya unikalnich identifikatorov

// I odin ne yavlyaetsa "primitivnim"
// 8. object dlya bolee slojnich strucktur dannich.

// ================// Operatori // ==============================================================================

// Operator typeof - pozvolyaet nam uvidet, kakoy tip dannich sohranen v peremennoy.

// let user; // undefined
// let notResponce = null; // object - oshibka v yazike archiologicheskaya
// let obj = {}; // object
// const message = 'Hello, world'; // string
// let isLogin = false; // boolean 
// const pi = 3.14; // number

// let piType = typeof pi; // 'number'
// let isLoginType = typeof (isLogin); // 'boolean' mojno vzyat v skobki

// console.log(isLoginType);

// ================================================================================================================

// =============// Konvertazia tipov // ===============================

// Suchestvuet 3 naibolee shiroko ispolzuemich preobrazovaniya: strokovoye, chislennoe i logicheskoye. 

// 1. Strokovoe - proishodit, kogda nam nujno chto to vivesti.
// Mojet bit vizvano s pomochiu

// const pi = 3.14;
// const piString = String(pi);

// console.log(piString, pi);


// const isTrue = true;
// const isTrueString = String(isTrue);

// console.log(isTrue, isTrueString);


// let hello = 'Hello';
// let world = 'World';

// console.log(hello + ' ' + 'World' + '!');  // konkatenatsiya

// 2. Chislennoye - proishodit v matematicheskih operatsiyach.
// Mojet bit vizvano s pomochyu Number(value).

// const piString = '3.14';
// const piNumber = Number(3.14);

// console.log(piString, piNumber);

// 3. Logicheskoye - proushodit v logicheskih operatsiyah.
// Mojet bit vizvano s pomochiu Boolean(value).

// console.log(Boolean(3.14)); // true 
// console.log(Boolean(0)); // false


// Boolean

// undefined == false    // {} == true
// null == false         // 'Hello, world' == true
// '' == false           // 3.14 == true
// 0 == false            // -5 == true
        // console.log( Boolean(-5));

// ===================================================================================

// let userName = 'John';
// let admin = userName;

// console.log(admin);

// =============// Operatori sravneniya // ============================

// console.log('1 < 2', 1 < 2); // true
// console.log('2 > 1', 2 > 1); // true
// console.log('1 != 2', 1 != 2); // true  != otrizanie, ne raven
// console.log('1 <= 2', 1 <=2); // true
// console.log('2 >= 1', 2 >= 1); // true

// rezultatom ih vipolneniya boolean znacheniye

// console.log( 100 === '100'); // jestkoye tojdestvo - false
// console.log( 100 == '100'); // privedeniye k tipu - true ==
// console.log( 100 != '100'); 
// != i ==  - privodyat k odnomu tipu
// !== i ===  - jestkoe tipizirovannoye tojdestvo

// console.log( 'John' === 'John');



// ===================// Uslovniy operaror if else // ============================================

// if () {} // bazoviy sintaksis usloviya

// if (/* usloviye*/) {
//     // telo usloviya
// }             


// let userAge; // let userAge = 18;
// let inputValue = 18; // dlya naglyadnosti
// userAge = inputValue;

// if (userAge > 18) {  // esli userAge > 18 true to vipolnit telo uslovie
//   console.log('Welcome, user');
// } else { // esli userAge > 18 false
//   console.log('Sorry, user');
// }


// if (userAge === 18) {
//      console.log('You became a surprise!');   
// } else if (userAge > 18) {
//      console.log('Welcome, user');
// } else {
//      console.log('Sorry, user');   
// }


// let inputAge = '31';

// if (Number(inputAge) > 18) {
//         console.log('Login');
// }

// ===============// Logic Operators // =====================================================================

// || - logicheskoye ili
// && - logicheskoye i  ampersant
// ! - logicheskoye ne

// let booleanResult = 1 === 1 || 2 === 2; // true 
// let booleanResult = 1 !== 1 || 2 === 2; // true
// let booleanResult = 1 !== 1 || 2 !== 2; // false
// console.log(booleanResult);

// let booleanResult = 1 === 1 && 2 === 2; // true
// let booleanResult = 1 === 1 && 2 !== 2; // false
// console.log(booleanResult);

// let booleanResult = 1 === 1 && 2 === 2; // true
// console.log(!booleanResult); // provesti otrizaniye // false


// let time = 20;

// if (time > 10 && time < 18) {
//        console.log('Office is open');
// }


// let currentYear = 2022;
// let year = 2024;

// if (currentYear === year) {
//         console.log('Sovremennost');
// } else if (currentYear > year) {
//         console.log('Zastryali v proshlom');
// } else {
//         console.log('Ubejali vpered');
// }

// =======================================================================================================

// (condition) ? code_if_true : code_else // if  else

// let isLogin = false;
// isLogin
//      ? console.log('Login'); // true
//      : console.log('LogOut'); // false


// let age = 20;
// let result = age >= 18
//               ? 'Sovershenoletniy'; // true
//               : 'Slishkom un'; // false

// let result;
// if (age >= 18) {
        // result = 'Sovershenoletniy';    
// } else {
// result = 'Slishkom un'; 
// }

// console.log(result);

// ========================================================================================================

// let name = 'Ilya';

// console.log(`hello ${1}`);
// console.log(`hello ${"name"}`);
// console.log(`hello ${name}`);


// U nas est noviy dom na 1000 kvartir // - 100 kvartir kupili v kredit // - 100 kvartir kupili za nalichniye 
// - 200 kvartir arendovali // - Ostavshiesya kvartiri ctoyat pustiye
// - Skolko vsego kvartir uje zanyato? 
// - Skolko kvartir eche nujno zanyat?
// - Chego bolshe, zanyatich kvartir ili ne zanyatich? (Vivesti znacheniye v konsol)
// - V zavisimosti ot togo kakich kvartir bolshe // vivodite v konsol soobcheniye ob etom 
//'U nas bolshe pustich kvartir' ili 'U nas bolshe zanyatich kvartir'


let house = 1000;
let credit = 100;
let cash = 100;
let lising = 200;
let empty = house - (credit + cash + lising);
let notEmpty = credit + cash + lising;
if (empty > notEmpty) {
     console.log('Bolshe pustich');
} else {
        console.log('Bolshe zanyatich');
}        