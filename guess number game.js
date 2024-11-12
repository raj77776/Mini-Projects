Num = 25;
guessNum = prompt("please enter any odd number between 0 to 30");
let body = document.querySelector("body"); //DOM 

while (guessNum != Num) // Infinite Loop
{
    guessNum = prompt("Sorry try again");
}

body.innerHTML = "Congrats You Won....The winning number was 25!"