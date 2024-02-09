//funções recursivas

function fatorial(n) {
  if (n === 1) return 1;
  return fatorial(n - 1) * n;
}

//console.log(fatorial(100));

// exemplo do prof:

function recursiva(max) {
  if (max > 10) return;
  console.log(max);
  max++;
  recursiva(max);
}

recursiva(-100);
