function checkAccess(age, isAdmin) {
  if (age >= 18 || isAdmin) {
    console.log("verified");
  } else {
    console.log("don't verified");
  }
}
checkAccess(17, true);
