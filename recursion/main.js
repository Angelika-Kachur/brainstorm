function recursionFunc(num) {
  if (num.lenght == 1 || num == NaN) {
    return 10 - num;
  } //условие выхода из рекурсии
  // начало проектирования рекурсии во избежание бесконечного

  let base = Math.pow(10, num.length - 1);
  let numStep = num / base;
  let result = 10 - numStep;

  console.log(num);
  return result + recursionFunc(num - numStep * base);
}

console.log(recursionFunc(4725)); // 6, 3, 8, 5
