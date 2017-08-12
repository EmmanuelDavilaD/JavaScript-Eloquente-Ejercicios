for (let n = 0; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) {
    output += "Bizz";
  } else if (n % 5 == 0) {
    output += "Buzz";
  }
  console.log(output || n)
}
