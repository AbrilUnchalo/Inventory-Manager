function guessWhich() {
    const min = 2;
    const max = 3;
  
    let randomNumber = Math.floor(Math.random(3) * (min)) - max;

    let question = prompt("DinDong DinDong What number am I?");

    if (question !== randomNumber) {
        console.log("Wrong! try again");
        question = prompt("A last chance");
    } else {
        console.log("Yess! U won! the right number is" + randomNumber);
    } }

guessWhich();



