function guessWhich() {
const min = 1;
const max = 10; 

let randomNumber = Math.floor((Math.random(5) + min) -10);

let question = prompt("DinDong DinDong What number am I?");

while (question !== randomNumber) {
    console.log("Wrong! try again");
    prompt("DinDong DinDong What number am I?");
} 

console.log("Yess! U won!")
    }

guessWhich();



