let buttons = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let turnO = true;
let msgbox = document.querySelector(".msgs");
let winner = document.querySelector("#Winner");

const winStreaks = [  // This is a 2-D array formation.An array inside an array.

    [0, 1, 2], // horizontal winning pattern.
    [0, 3, 6], // vertical winning pattern.
    [0, 4, 8], // diagonal winning pattern.
    [1, 4, 7], // centre vertical winning pattern.
    [2, 5, 8], // right vertical winning pattern.
    [2, 4, 6], // diagonal winning pattern.
    [3, 4, 5], // centre horizontal winning pattern.
    [6, 7, 8], // horizontal winning pattern.
];

  const resetGame = () => { 
    turnO = true;
    enableBtns(); // calling function
    msgbox.classList.add("hide"); // For hiding winner.
  }

buttons.forEach((box) => {  // this forEach loop is used to perform work on every single button.
    box.addEventListener("click", () => {  // We have added and event listener inside loop to change the state of obj whenever clicked.
        if (turnO === true) {
            //player O
             box.innerText = "O";
             box.style = "color : red"; //DOM manipulation
            turnO = false;
        } else {
            //player X
            box.innerText = "X"
            box.style = "color : green";
            turnO = true;
        }
        box.disabled = true; // disable the buttons after one input value so client cannot reuse it.
        checkWinner(); //Calling Function
    });
});
        const disableBtns = () => {
            for (let box of buttons) {
                box.disabled = true;
            }
        }

        const enableBtns = () => {
            for (let box of buttons) {
                box.disabled = false;
                box.innerText = "";
            }
        }
         let showWinner = (win) => {
               winner.innerText = `Congratulations Winner is ${win}`
               msgbox.classList.remove("hide"); // remove hide class from css to display winner.
               disableBtns(); // After winner is declared disable the buttons.
            } 
   

   let checkWinner = () => { //Arrow function is used here. 
                             
       for (let pattern of winStreaks) // accessing all arrays at once stored in winStreaks using for of loop.
        {
            let pos1 = buttons[pattern[0]].innerText; // Extracting individual index of array and accessing their inner text when clicked.
            let pos2 = buttons[pattern[1]].innerText;
            let pos3 = buttons[pattern[2]].innerText;

            if (pos1 != "" && pos2 != "" && pos3 != "") // all positions should not be equal to empty any input value should present there like "O" and "X" then only we will check winner.
                {
                    if (pos1 === pos2 && pos2 === pos3) // Strict euality condition.(strings also match here) 
                    {

                    console.log("winner", pos1); //winner value will be stored in pos1.
                    showWinner(pos1); //calling function
                    }
                }
            
        }
   };

   resetbtn.addEventListener("click", resetGame); // calling reset function to reset game when clicked on reset button.

  
// CODE FOR CREATING DARK AND LIGHT MODE...

let mode = "light"; // setting mode variable value to light
let btn = document.querySelector("#toggle");// selecting only change mode button.
let body = document.querySelector("body"); // selecting whole body of web page.

btn.addEventListener("click", () => { 
 if (mode === "light") { // Strict Equality Check.
    mode = "dark"; // Setting mode variable value to dark.
    body.setAttribute("class", "dark"); 
    
 } else {
    mode = "light";
    body.setAttribute("class", "light")
 }

 console.log(mode);

})
   

   