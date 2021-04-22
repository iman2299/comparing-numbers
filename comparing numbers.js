/* write a small web app that does the following:
    - asks the user to enter two numbers.
    - it should decide which number is larger or if they are equal.
    - displays the message "The larger number is" followed by the larger number.
    - if the two numbers are equal the app shall display the string "The numbers are equal".
    - if the user enters a non-numeric value or clicks Cancel then that value is 
    converted to 0.
    - examples:
         the user enters 5, clicks Ok, then 3, clicks Ok: result is "The larger number is 5".
         the user enters 7, clicks Ok, then clicks Cancel in the second one: the result is 
         "The larger number is 7" (second one is 0).
         the user clicks Cancel in the first one, then enters his name in 
         the scond one and clicks Ok: result "The numbers are equal" (both are 0).
       
         */
const value1 = Number(prompt('Enter first value')) || 0;

const value2 = Number(prompt('Enter second value')) || 0;

if (value1>value2){
    document.getElementById("test").innerHTML = "Number  " + value1+ "  is Larger  Number";
}
else if (value1==value2){
    document.getElementById("test").innerHTML = "Numbers are equal";

}
else {
    document.getElementById("test").innerHTML = "Number  " + value2+ "  is Larger Number";
}    