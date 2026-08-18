function sumTo(n) {
  let sum = 0;

  for (let m = 1; m <= n; m++) {
    sum = sum + m;
  }
  return sum;
}

let result = sumTo(5);
console.log(result);
