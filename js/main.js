var myArray=["Oreo", "Tux", "Artemis", "Luna", "Pearl"];
var myLowerCaseArray=[];
//changing to lowercase
for (var i=0; i<myArray.length; i++){
	myLowerCaseArray.push(myArray[i].toLowerCase());
}

//console logging first and last character of string
for (var i=0; i<myLowerCaseArray.length; i++){
	console.log(myLowerCaseArray[i][0]);
	console.log(myLowerCaseArray[i].split("").pop());	
}

//console.logging each letter in name
var myName="Maribel";
var splitName=[];

for (var i=0; i<myName.length; i++){
console.log(myName[i].split(""));
splitName.push(myName[i].split(""));}

//joining my name
console.log(splitName.join("").replace("a", "x"));

//setting the eventListener to the submit button
document.getElementById("submit").addEventListener("click", checkMyEmail);

//with this function we can log to the console if the users email is a valid email address, returns false/true
function checkMyEmail(){
	var userEmail=document.getElementById("myEmail");
	var regEx=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
	document.getElementById("results").innerHTML=regEx.test(userEmail.value);
}


