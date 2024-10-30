let btn = document.querySelector("button"); //DOM Manipulation

let mode = "light"; // setting mode variable value to light

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




