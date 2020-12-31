// set timeout
let timer = setTimeout(function f(params) {
  console.log("Hello");
  timer = setTimeout(f, 2000);
}, 2000);

// setInterval
let timer = setInterval(() => {
  console.log("Hihihihi");
}, 1000);
//
