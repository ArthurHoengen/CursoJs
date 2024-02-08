// Funções de callback

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    // Alías, essa function é um call back de setTimeout
    console.log("f1");
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

// Assim: a ordem sempre será f1, f2, f3, olá mundo!
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("Ola Mundo!");
//     });
//   });
// });
// Mas isso é o callback HELL, por que se houvesse mais callbacks seria um problema

// Assim é melhor:

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log("Olá mundo!");
}
