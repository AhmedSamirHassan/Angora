//example (1)

// var number = Number(prompt("Enter a number:"));

// console.log(number);

//example (2)

// var number = Number(prompt("Enter a number:"));

// if(number%3==0||number%4==0) {
//     console.log("Yes")
// }
// else {
//     console.log("No")
// }

//example (3)

// var num1 = Number(prompt("Enter First Number:"));
// var num2 = Number(prompt("Enter Second Number:"));

// if(num1 > num2) {
//     console.log(`Max Number is ${num1}`);
// }
// else {
//     console.log(`Max Number is ${num2}`);
// }

//example (4)

// var num = Number(prompt("Enter Your Number:"));

// if(num > 0) {
//     console.log("Positive");
// }
// else if (num < 0) {
//     console.log("Negative");
// }
// else {
//     console.log("It is Zero Not Negative or Positive");
// }

//example (5)

// var num1 = Number(prompt("Enter First Number:"));
// var num2 = Number(prompt("Enter Second Number:"));
// var num3 = Number(prompt("Enter Third Number:"));

// var max = num1;
// var min = num1;

// if(max>num2) {
//     min=num2;
// }
// else {
//     max=num2;
// }
// if(num3>max) {
//     max=num3;
// }
// else {
//     min=num3;
// }

// console.log(`Max Number is ${max} and Min Number is ${min}`);

//example (6)

// var num = Number(prompt("Enter Your Number:"));

// if (num%2==0) {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }

//example (8)

// var char =prompt("Enter Your Character:");

// if(char=="e"||char=="a"||char=="o"||char=="u"||char=="i") {
//     console.log("Vowel");
// }
// else {
//     console.log("consonant");
// }

//example (9)

// var num = Number(prompt("Enter Your Number:"));

// for(i=1 ; i <= num ; i++) {
//     console.log(i);
// }

//example (10)

// var num = Number(prompt("Enter Your Number:"));

// for(i=num ; i <= num*12 ; i+=num) {
//     console.log(i);
// }

//example (11)

// var num = Number(prompt("Enter Your Number:"));

// for(i=1 ; i <= num ; i++) {
//     if(i%2==0) {
//         console.log(i)
//     }
// }

//example (12)

// var num1 = Number(prompt("Enter Your Number:"));
// var num2 = Number(prompt("Enter Your Power:"));

// console.log(num1**num2);

//example (12)

// var sum = 0;

// for (i=1 ; i<=5 ; i++) {
//     var numi = Number(prompt("Enter Your Number:"));
//     sum += numi;
// }

// var avg = sum / 5;
// var precent = (sum/500)*100;
// console.log(`Average is ${avg} and precentage is ${precent}`)

//example (13)

// var month = Number(prompt("Enter Your Month:"));
// if(month==2) {
//     console.log(`Days in Month is 28`);
// }
// else if (month==4||month==6||month==8||month==10) {
//     console.log(`Days in Month is 30`);
// }
// else {
//     console.log(`Days in Month is 31`);
// }

//example (14)

// var sum = 0;

// for (i=1 ; i<=5 ; i++) {
//     var numi = Number(prompt("Enter Your Makrs in Subjects series:"));
//     sum += numi;
// }
// var precent = (sum/500)*100;
// if(precent>=90) {
//     console.log("Your Grade is A")
// }
// else if(precent>=80) {
//     console.log("Your Grade is B")
// }
// else if(precent>=70) {
//     console.log("Your Grade is C")
// }
// else if(precent>=60) {
//     console.log("Your Grade is D")
// }
// else if(precent>=40) {
//     console.log("Your Grade is E")
// }
// else{
//     console.log("Your Grade is F")
// }

//example (15)

// var month = Number(prompt("Enter Your Month 1 : 12:"));
// var totalDays;

// switch(month) {
//     case 2:
//         totalDays=28;
//         break;
//     case 4:
//         totalDays=30;
//         break;
//     case 6:
//         totalDays=30;
//         break;
//     case 8:
//         totalDays=30;
//         break;
//     case 10:
//         totalDays=30;
//         break;
//     default:
//         if(month>12) {
//             console.log("There is no days because the month is wrong")
//         }
//         else {
//             totalDays=31;
//             break;
//         }
// }

// console.log(`Days of Month : ${totalDays}`)


//Another Solution
// var month = Number(prompt("Enter Your Month 1 : 12:"));
// var totalDays;

// switch(month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 9:
//     case 11:
//     case 12:
//         totalDays=31;
//         break;        
//     case 2:
//         totalDays=28;
//         break;
//     case 4:
//     case 6:
//     case 8:
//     case 10:
//         totalDays=30;
//         break;
// }

// console.log(`Days of Month : ${totalDays}`)


//example (16)

// var char = prompt("Enter Your char");

// switch(char) {
//     case "a":
//     case "u":
//     case "e":
//     case "o":
//     case "i":
//         console.log("an alphabet is Vowel")
//         break;
//     default:
//         console.log("an alphabet is consonant")
//         break;
// }

//example (17)

// var num1 = Number(prompt("Enter Your First Number:"));
// var num2 = Number(prompt("Enter Your Second Number:"));
// switch (true) {
//     case (num1>num2):
//         console.log(`Max Number is ${num1}`);
//         break;
//     case (num2>num1):
//         console.log(`Max Number is ${num2}`);
//         break;
//     default:
//         console.log(`Two Numbers are equal`);
// }

//example (18)

// var num = Number(prompt("Enter Your Number:"));

// switch(num%2) {
//     case 0:
//         console.log(`Your Number is Even`);
//         break;
//     case 1:
//         console.log(`Your Number is Odd`);
//         break;
//     default:
//         console.log(`Your Number is Not Even or Odd`);
//         break;
// }

//example (19)

// var num = Number(prompt("Enter Your Number:"));

// switch(true) {
//     case (num>0):
//         console.log(`Your Number is Positive`);
//         break;
//     case (num<0):
//         console.log(`Your Number is Negative`);
//         break;
//     case (num==0):
//         console.log(`Your Number is Zero`);
//         break;
//     default:
//         console.log(`Your Number is Invalid`);
//         break;
// }


//example (20)

// var num1 = Number(prompt("Enter Your First Number:"));
// var num2 = Number(prompt("Enter Your Second Number:"));
// var operator = prompt("Enter Your Operator : + | - | * | /");
// var finalAnswer;

// switch(operator) {
//     case "+":
//         finalAnswer = num1 + num2;
//         break;
//     case "-":
//         finalAnswer=num1-num2;
//         break;
//     case "*":
//         finalAnswer = num1 * num2;
//         break;
//     case "/":
//         finalAnswer = num1 / num2;
//         break;
//     default:
//         console.log("Invalid")
// }

// console.log(finalAnswer);

// var Student = {
//     firstName : "Ahmed",
//     lastName : "mohamed",
//     age : 22,
//     address:{
//         country: "egypt",
//         city: "portsaid",
//     },
//     getage: function() {
//         return this.age;
//     }
// }


// var result = Student.getage();
// console.log(Student);
// console.log(Student.address.country);
// console.log(result);


// var arr = [
//     {
//         name : "ahmed",
//         age : 12,
//         subject : "Math",
//     },
//     {
//         name : "ali",
//         age : 13,
//         subject : "english",
//     },
//     {
//         name : "emad",
//         age : 15,
//         subject : "chemist",
//     },
// ]

// for (i=0 ; i<=3 ; i++) {
//     if(members[i].gender == "male") {
//         console.log(`hello, Mr ${members[i].name}`)
//     }
// }



var productName = document.getElementById('pName');
var productCat = document.getElementById('pCat');
var productPrice = document.getElementById('pPrice');
var productDes = document.getElementById('desc');

var productList=[];
function greatProduct () {
    var product = {
        pName: productName.value,
        pCat: productCat.value,
        pPrice: productPrice.value,
        pdesc: productDes.value,
    }
    productList.push(product);
    display();
}

function display() {
    var trs = ``;
    for(var i=0 ; i<productList.length ; i++) {
        trs += `
        <tr>
        <td>${i+1}</td>
        <td>${productList[i].pName}</td>
        <td>${productList[i].pCat}</td>
        <td>${productList[i].pPrice}</td>
        <td>${productList[i].pdesc}</td>
        <td><button class="btn btn-outline-warning"><i class="fa-solid fa-edit"></i></button></td>
        <td><button class="btn btn-outline-danger" onclick="delte(${i})"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        `
    }
    document.getElementById('Imp').innerHTML=trs;
}


function delte(index) {
    productList.splice(index,1);
    display();
}


var proSearch = document.getElementById('prosearch');
function productsearch(){
    var trs=``;
    for(var i=0 ; i<productList.length ; i++) {
        if(productList[i].pName.includes(proSearch.value)) {
        trs += `
        <tr>
        <td>${i+1}</td>
        <td>${productList[i].pName}</td>
        <td>${productList[i].pCat}</td>
        <td>${productList[i].pPrice}</td>
        <td>${productList[i].pdesc}</td>
        <td><button class="btn btn-outline-warning"><i class="fa-solid fa-edit"></i></button></td>
        <td><button class="btn btn-outline-danger" onclick="delte(${i})"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`
        }
    }
    document.getElementById('Imp').innerHTML=trs;
}