let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

// Um jeito novo de fazer seria:

//[varA, varB, varC] = [varB, varC, varA];

//console.log(varA, varB, varC);