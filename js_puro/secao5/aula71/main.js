// forEach

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let valor of a1) {
  console.log(valor);
}

// Ou:

a1.forEach((valor, indice, array) => console.log(valor));
