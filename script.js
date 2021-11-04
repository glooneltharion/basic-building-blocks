/* 
Questions1: 14
Questions2: 
let a = 2;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

for (var i = 0; i <= 9; i++) {
    console.log(i);
   };


for (var i = 1; i <= 10; i++) {
    console.log(i);
   };

for (var i = 0; i <= 20; i++) {
    if( i% 2 == 0){
        console.log(i);
       }
   };

   */

var printNumbersTill = (a) => {
    for (var i = 1; i <= a; i++) {
        console.log(i);
       };
  };

var getGreetingTo = (a) => {
        console.log("Hello " + a + "!");
  };


/*
let printValues = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };
*/

var printValues = [0, 3, 6, 7, 9];


printValues.forEach((number) => {

  console.log(number);
  
});




