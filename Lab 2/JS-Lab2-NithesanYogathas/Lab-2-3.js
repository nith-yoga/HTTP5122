//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userInput;
var userChoice;
var success = "Thank you, our next newsletter will be sent to "
var decline = "Thank you, we will not bother you again."
var invalid = "Thank you, but your email was not valid."


//==== LOGIC =============
var userChoice = window.confirm("Would you like to join our mailing list");
if (userChoice === true){
    userInput = window.prompt("Enter your email:", "me@example.com");  
}
if(userChoice === false){
    window.alert(decline);
}
else if(userInput.length === 0 || userInput === null || userInput === "me@example.com"){
    window.alert(invalid);
}
else{
    window.alert(success + userInput);
}