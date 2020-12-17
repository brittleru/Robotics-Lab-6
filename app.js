// Conversion functions
const PI = Math.PI
const toDegrees = angle => angle * (180 / PI);
const toRadians = angle => angle * (PI / 180);


// Global variables
const lengthL1 = 60;       // [m]
const lengthL2 = 60;       // [m]
const a = 10;                // [m]
const xi = 10;               // [m]
const xf = 40;               // [m]
const yi = 50;               // [m]
const yf = 10;               // [m]


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

// console.log(xArr);
// console.log(yArr);



for (let i = 0; i < 10; i++) {

  let rho1 = Math.sqrt(Math.pow(a + xArr[i], 2) + Math.pow(yArr[i], 2));
  let alpha1 = Math.atan(yArr[i] / (a + xArr[i]));
  let h1 = Math.sqrt((lengthL1 + lengthL2 + rho1) * (lengthL1 + lengthL2 - rho1) *
                     (lengthL2 + rho1 - lengthL1) * (rho1 + lengthL1 - lengthL2) /
                     (2 * rho1));
  let t1 = rho1 - Math.sqrt(Math.pow(lengthL2, 2) - Math.pow(h1, 2));
  


}







































//
