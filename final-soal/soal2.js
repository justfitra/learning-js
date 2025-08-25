function callculator(number1, number2, operator) {
  let result;
  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else if (operator === "/") {
    result = number1 / number2;
  }
  return result;
}

function konversasiNilai(nilai) {
  if (nilai >= 90 && nilai <= 100) {
    return "A";
  } else if (nilai >= 80 && nilai < 90) {
    return "B";
  } else if (nilai >= 70 && nilai < 80) {
    return "C";
  } else if (nilai >= 60 && nilai < 70) {
    return "D";
  }
}

function kabisatYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  return false;
}
console.log(callculator(1, 2, "+"));
console.log(konversasiNilai(70));
console.log(kabisatYear(2004));
