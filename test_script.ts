const param_1 = "123";

const timerId = setTimeout(() => {
  console.log("hello");
}, 5000);

console.log(param_1);

clearTimeout(timerId);

console.log(timerId);
