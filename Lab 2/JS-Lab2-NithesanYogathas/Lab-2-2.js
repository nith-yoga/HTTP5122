//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
var CorrectUser = "dart";
var CorrectPass = "vader";
var UserInput;
var PassInput;

//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var UserInput = window.prompt("Enter your Username");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(UserInput);

//5. CREATE POPUP BOX FOR PASSWORD
var PassInput = window.prompt("Enter your password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(PassInput);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD

if (UserInput === CorrectUser && PassInput === CorrectPass){
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
	window.alert("Welcome back" +" " + CorrectUser)
	console.log("Login successful")
}


//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else{
	window.alert("Invalid username/password")
	console.log("Login Fail")
}