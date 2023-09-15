// QUESTION 1
// var a = prompt("Enter a character: ");
// if (a.length==1)
// {
//     if (a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90)
//     {
//         document.write("It's an Uppercase letter!");
//     }
//     else if (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122)
//     {
//         document.write("It's a Lowercase letter!");
//     }
//     else if (!isNaN(a))
//     {
//         document.write("It's a number!");
//     }
// }

// QUESTION 2

// var num1=+prompt("Enter 1st number: ");
// var num2=+prompt("Enter 2nd number: ");
// if (num1>num2) {
//     document.write("Larger number is: "+num1);
// }
// else if (num2>num1){
//     document.write("Larger number is: "+num2);
// }
// else {
//     document.write("Both the numbers are equal!");
// }

// QUESTION 3

// var num=+prompt("Enter 1st number: ");
// if (num>0) {
//     document.write("Number is postive!");
// }
// else if (num<0){
//     document.write("Number is negative!");
// }
// else {
//     document.write("Number is zero!");
// }

// QUESTION 4

// var a = prompt("Enter a character: ");
// if (a.length==1 && (a == "a" || a =="e" || a =="i" || a =="o" || a =="u" || a =="A" || a =="E" || a =="I" || a =="O" || a =="U"))
// {
//     document.write("It's a vowel!");
// }
// else if (a.length>1)
// {
//     document.write("Error! Enter alphabet only!");
// }
// else if (a.length==1){
//     document.write("Not a vowel!");
// }

// QUESTION 5

// var pw = "zebra";
// var x =prompt("Enter your password: ");
// if (pw.length>=1)
// {
//     if(pw==x)
//     {
//         alert("Correct! The password you entered matches the original password.");
//     }
//     else {
//         alert("Incorrect password!");
//     }
// }
// else {
//     alert("Please enter your password.");
// }

// QUESTION 6 

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }
// alert(greeting);

// QUESTION 7

// var time = prompt("Enter time in (1500 format): ");
// if (time.length == 4)
// {
// if (time>="0000" && time<"1200") {
//             document.write("Good morning!");
//         }
//         else if (time>="1200" && time < "1700")
//         {
//             document.write("Good afternoon!");
//         }
//         else if (time>"1700"&& time<"2100")
//         {
//             document.write("Good evening!");
//         }
//         else if (time>="2100" && time<"2359")
//         {
//             document.write("Good night!");
//         }
//     }
//     else {
//         document.write("Invalid format!");
//     }
    
// var def = 1200;
// var time = prompt("Enter time in (1500 format): ");
// if (time.length == 4) {
//     if (time > 1200) {
//         var res = time - def;
//         document.write("It's " + res + " PM");
//     }
//     if (time < 1200) {
//         document.write("It's " + time + " AM");
//     }
//     else if (time == "1200") {
//         document.write("It's 12:00AM");
//     }

// }
// else {
//     document.write("Error! Wrong format!");
// }

