// Conversion functions
const PI = Math.PI
const toDegrees = angle => angle * (180 / PI);
const toRadians = angle => angle * (PI / 180);


// Global variables
const lengthL1 = 60;    // [mm]
const lengthL2 = 60;    // [mm]
const a = 10;           // [mm]
const xi = 10;          // [mm]
const xf = 40;          // [mm]
const yi = 50;          // [mm]
const yf = 10;          // [mm]


// Result arrays
let xArr = [];
let yArr = [];
let phi1Arr = [];
let phi2Arr = [];
let Rho1Arr = [];
let Alpha1Arr = [];
let H1Arr = [];
let T1Arr = [];
let Beta1Arr = [];
let Rho2Arr = [];
let Alpha2Arr = [];
let H2Arr = [];
let T2Arr = [];
let Beta2Arr = [];


// Create x and y arrays
for (let i = 10; i <= 40; i += 3) {
  xArr.push(i);
}
for (let i = 10; i <= 50; i += 4) {
  yArr.unshift(i);
}

for (let i = 0; i <= 10; i++) {

  let rho1 = Math.sqrt(Math.pow(a + xArr[i], 2) + Math.pow(yArr[i], 2));
  let alpha1 = Math.atan(yArr[i] / (a + xArr[i]));
  let h1 = Math.sqrt((lengthL1 + lengthL2 + rho1) * (lengthL1 + lengthL2 - rho1) *
                     (lengthL2 + rho1 - lengthL1) * (rho1 + lengthL1 - lengthL2))
                     / (2 * rho1);
  let t1 = rho1 - Math.sqrt(Math.pow(lengthL2, 2) - Math.pow(h1, 2));
  let beta1 = Math.atan(h1 / t1);
  let phi1 = alpha1 + beta1;

  let rho2 = Math.sqrt(Math.pow(a - xArr[i], 2) + Math.pow(yArr[i], 2));
  let alpha2 = Math.atan(yArr[i] / (a - xArr[i]));
  let h2 = Math.sqrt((lengthL1 + lengthL2 + rho2) * (lengthL1 + lengthL2 - rho2) *
                     (lengthL2 + rho2 - lengthL1) * (rho2 + lengthL1 - lengthL2))
                     / (2 * rho2);
  let t2 = rho2 - Math.sqrt(Math.pow(lengthL2, 2) - Math.pow(h2, 2));
  let beta2 = Math.atan(h2 / t2);
  let phi2 = alpha2 + beta2;

  // Update DOM elements
  this[`x${i}`] = document.getElementById(`x-${i}`);
  let xDom = this[`x${i}`];
  xDom.innerHTML = xArr[i];

  this[`y${i}`] = document.getElementById(`y-${i}`);
  let yDom = this[`y${i}`];
  yDom.innerHTML = yArr[i];

  this[`phi1_${i}`] = document.getElementById(`phi1-${i}`);
  let phi1Dom = this[`phi1_${i}`];
  phi1Dom.innerHTML = toDegrees(phi1);

  this[`phi2_${i}`] = document.getElementById(`phi2-${i}`);
  let phi2Dom = this[`phi2_${i}`];
  phi2Dom.innerHTML = toDegrees(phi2);

  // Fill arrays
  Rho1Arr.push(rho1);
  Rho2Arr.push(rho2);
  Alpha1Arr.push(alpha1);
  Alpha2Arr.push(alpha2);
  H1Arr.push(h1);
  H2Arr.push(h2);
  T1Arr.push(t1);
  T2Arr.push(t2);
  Beta1Arr.push(beta1);
  Beta2Arr.push(beta2);
  phi1Arr.push(toDegrees(phi1))
  phi2Arr.push(toDegrees(phi2))
}


// For higher calculus precision
console.log("Rho1Arr = ", Rho1Arr);
console.log("Rho2Arr = ", Rho2Arr);
console.log("Alpha1Arr = ", Alpha1Arr);
console.log("Alpha2Arr = ", Alpha2Arr);
console.log("H1Arr = ", H1Arr);
console.log("H2Arr = ", H2Arr);
console.log("T1Arr = ", T1Arr);
console.log("T2Arr = ", T2Arr);
console.log("Beta1Arr = ", Beta1Arr);
console.log("Beta2Arr = ", Beta2Arr);
console.log("phi1Arr = ", phi1Arr);
console.log("phi2Arr = ", phi2Arr);







































//
