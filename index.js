function checkNumber(n) {
  if (n < 0) {
    console.log("otricalovo");
  } else if (n > 0) {
    console.log("polojitelnoe");
  } else if (n === 0) {
    console.log("ravno nulu");
  }
}
//checkNumber(2343223);

function checkEven(n) {
  if (n % 2 === 0) {
    console.log("chotnoe");
  } else {
    console.log("nechotnoe");
  }
}

checkEven(12334234312);
