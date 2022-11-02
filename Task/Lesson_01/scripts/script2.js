  
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число(например 5025)
// и возвращает сумму его цифр (в данном примере возвращаемое из функции значение будет 12).

  // let getDigitsSum = function (digit) {
    
  //   let n1 = digit / 10000;
  //   let n2 = (digit / 1000) % 10;
  //   let n3 = (digit / 100) % 10;
  //   let n4 = (digit / 10) % 10;
  //   let n5 = digit % 10;
  //   let sum = n1 + n2 + n3 + n4 + n5;
  //   let round = Math.round(sum);
  //   return round;
  // }

  // console.log(getDigitsSum(5025));
    

  let getDigitsSum = (number) => {
    let numString = String(number);
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
      sum += Number(numString[i]);
    }
    return sum;
  };
  
  // console.log(getDigitsSum(2055));
  
  
  
  
  // for (let i = 0; i <= 2022; i++) {
  //   if (getDigitsSum(i) === 13) {
  //     console.log(i);
  //   }
  // };
  
  
  
  
  let checkYears = (startYear, endYear, checkSum) => {    // 2. Zapusk s argumentami
    let yearsArray = [];                                  // 3. Sozdaem pustoy massiv
    for (let i = startYear; i <= endYear; i++) {          // 4. Perebirayem goda
      if (getDigitsSum(i) === checkSum) {                 // 5. Proveryaem summu
        yearsArray.push(i);                               // 6. Push massiv chislami
      }
    }
    return yearsArray;                                    // 7. Vozvraschayem massiv
  }
  
  console.log(checkYears(0, 1000, 13));                   // 1. Vizov funkzii