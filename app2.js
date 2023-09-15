// CHAPTER 14-16

// QUESTION 7

// var stuNames = [];
// var studentNames = new Array();
// var strArr = ["Alpha", "Beta", "Gamma"];
// var numArr = [1,2,3];
// var boolArr = [true, false, true, true, false];
// var mixArr = ["Apple", 2, true, "Banana", 3];

// var arr=["SSC","HSC","BCS", "BS", "BCOM", "MS", "M. Phil.","PhD"];
// var i=1;
// var a=0;
// while (i!=arr.length)
// {
// document.write(i+") "+arr[a]+"<br>");
// a++;
// i++;
// }

// QUESTION 8

// var names = [];
// var marks = [];
// var a;
// a = prompt("Enter student name: ");
// names.push(a);
// a = prompt("Enter student name: ");
// names.push(a);
// a = prompt("Enter student name: ");
// names.push(a);
// a = prompt("Enter marks of student: ");
// marks.push(a);
// a = prompt("Enter marks of student: ");
// marks.push(a);
// a = prompt("Enter marks of student: ");
// marks.push(a);

// document.write("Score of "+names[0]+" is "+marks[0]+". Percentage: "+(marks[0]/5)+"<br>");
// document.write("Score of "+names[1]+" is "+marks[1]+". Percentage: "+(marks[1]/5)+"<br>");
// document.write("Score of "+names[2]+" is "+marks[2]+". Percentage: "+(marks[2]/5)+"<br>");

// QUESTION 9

// var colours = ["Red","Blue","Green","Yellow"];
// document.write(colours);
// var b;
// b = prompt("What colour do you wish to add to the list?");
// colours.push(b);
// document.write("<br>"+colours);
// colours.unshift("White");
// colours.unshift("Black");
// document.write("<br>"+colours);
// colours.shift();
// document.write("<br>"+colours);
// colours.pop();
// document.write("<br>"+colours);
// var i = +prompt("The index you want to add the colour: ");
// b = prompt("Colour: ");
// colours.splice(i,0,b);
// document.write("<br>"+colours);
// var i = +prompt("The index you want to delete the colour from: ");
// colours.splice(i,1);
// document.write("<br>"+colours);

// QUESTION 10
// var arr=[];
// var a;
// a=+prompt("Enter student score: ");
// arr.push(a);
// a=+prompt("Enter student score: ");
// arr.push(a);
// a=+prompt("Enter student score: ");
// arr.push(a);
// a=+prompt("Enter student score: ");
// arr.push(a);

// var b;
// document.write("Scores of students: "+arr);
// for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             b = arr[i];
//             arr[i] = arr[j];
//             arr[j] = b;
//         }
//     }
// }
// document.write("<br>Ordered scores of students: "+arr);

// // QUESTION 11

// var cities = ["Karachi", "Lahore", "Islamabad","Quetta","Peshawar"];
// var selectedCities = [];
// selectedCities=cities.splice(2,2);
// document.write(selectedCities);

// QUESTION 12

// var arr = ["This", "is", "my", "cat"];
// var a = arr.join(" ");
// document.write("Array: "+arr+"<br>");
// document.write("String: "+a+);

// QUESTION 13

// var arr = ["Keyboard", "Mouse", "Printer", "Monitor"];

// var a = arr.shift();
// var b = arr.shift(); 
// var c = arr.shift();
// var d = arr.shift(); 
// document.write(a+"<br>"+b+"<br>"+c+"<br>"+d+"<br>");

// QUESTION 14

// var arr = ["Keyboard", "Mouse", "Printer", "Monitor"];

// var a = arr.pop();
// var b = arr.pop();
// var c = arr.pop();
// var d = arr.pop();
// document.write("<br>"+a+"<br>"+b+"<br>"+c+"<br>"+d+"<br>");