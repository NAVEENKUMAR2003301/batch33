// // // // // javaScript

// // // // // scripting language

// // // // // 1. kjbhcjdbjksbkjbjchsbjkcbjhsdbjcbjsh
// // // // // 2. jbhjsbdjhbchjsdbvhjbfsdvhbkdjvhbv
// // // // // 3. jhshfhbsbhhufbsui

// // // // // variables

// // // // // var  - global scope & function scope

// // // // // let  - block scope

// // // // // const - block scope

// // // // // rules : -

// // // // // var rules

// // // // var a = 20                // declration   // intialiazation

// // // //     a = 25               // reuse        // reinitialization

// // // // var a = 30                // reDeclration

// // // // console.log(a)

// // // // // let rules

// // // // let b = 40

// // // //     b = 45

// // // // // let b = 50        // not accept redeclration

// // // // console.log(b);

// // // // // const rules - constant

// // // // const c = 60

// // // //     //   c = 65    not reuse , reintialization

// // // // // const c = 70    not accept redeclration

// // // // console.log(c);

// // // // Examples :-

// // // // 1. What is the output of the below code ?

// // // var a = 10
// // // a = 15
// // // var a = 20

// // // console.log(a) // 20

// // // // 2. Which keyword allows redeclaration ?

// // // // var

// // // // 3. Which keyword is used for constant values ?

// // // // constant

// // // // 4. Find the error in the below code

// // // let b = 30
// // // // let b = 40

// // // console.log(b) // syntex error

// // // // 5. What is reinitialization ?

// // // //

// // // // 6. What is the difference between var and let ?

// // // // 7. What is the output ?

// // // const c = 50

// // // console.log(c) // 50

// // // // 8. Can we reassign value to const ?

// // // //

// // // // 9. Which keyword does not allow redeclaration but allows reinitialization ?

// // // // 10. Write one example for:
// // // // a) var

// // // var a1 = 15

// // //     a1 = 20

// // // var a1 = 27

// // // console.log(a1);

// // // // b) let

// // // let a2 = 20

// // //     a2 = 25

// // // // let a2

// // // console.log(a2);

// // // // c) const

// // // const a3 = 27

// // //     //   a3 = 50

// // // // const a3

// // // console.log(a3);

// // // // printing Statement

// // // // 1. console.log()

// // // console.log(100);

// // // let a5 = 123

// // // console.log(a5);

// // // // 2. alert()

// // // // alert(100)

// // // // let a6 = 1234

// // // // alert(a6)

// // // // 3. confirm()

// // // // confirm("did you like program")

// // // // 4. prompt()

// // // // prompt("what is your name")

// // // // 5. document.writeln()

// // // // document.writeln("sdhbjshbjcsd")

// // // // example :-

// // // // 1. i want to print value "hello" in console side

// // // console.log("hello");

// // // // 2. i want to show "hello" to user the way is pop up

// // // // alert("hello")

// // // // 3. i want to print user age to console side

// // // // let userAge = prompt("enter your age")

// // // // console.log(userAge);

// // // // 4. i want to know user is complete html and css

// // // // let userCompletion = confirm("did you complete html,css")

// // // // console.log(userCompletion);

// // // // 5. i want to print in ui "batch 33"

// // // document.writeln("batch 33")

// // // console method

// // // 1. console.log()

// // console.log(100);

// // // 2. console.warn()

// // console.warn(100);

// // // 3. console.error()

// // console.error(100)

// // // 4. console.clear()

// // console.clear()

// // // Data Types : -

// // // 1. primitive dataTypes

// // // 1. string  - "hello"

// // let a = "navi"

// // console.log(typeof(a));

// // // 2. number - 123

// // let b = 123

// // console.log(typeof(b));

// // // 3. boolean - true, false

// // let c = false

// // console.log(typeof(c));

// // // 4. undefined

// // let d;

// // console.log(d);

// // // 5. null

// // // let e = prompt()

// // // console.log(e);

// // // 2. non primitive dataTypes

// // // Array

// // // syntex - []

// // let fruit = ["apple","orange","banana","cherry","giwi","pineApple","jack fruit"]

// // console.log(fruit);

// // console.log(fruit[0]);
// // console.log(fruit[1]);
// // console.log(fruit[2]);
// // console.log(fruit[3]);

// // console.log(fruit[fruit.length-1]);
// // console.log(fruit[fruit.length-2]);

// // // Object

// // // syntex :- {}

// // fruit = ["apple","orange","banana","cherry","giwi","pineApple","jack fruit"]

// // let obj = {
// //     redFruit : ["apple","cherry"],
// //     yellowFruit : ["banana","pineApple","jackFruit"],
// //     orangeFruit :"orange"
// // }

// // console.log(obj);
// // console.log(obj.redFruit[0]);
// // console.log(obj.yellowFruit[2]);
// // console.log(obj.orangeFruit);

// // console.clear();

// // // operator

// // // 1. Arithmrtic operator.

// // // Addition   +

// // console.log(5 +  6);

// // // subraction +

// // console.log( 5 - 3);

// // // multiplication   *

// // console.log(5*2);

// // // division  - /

// // console.log(5 / 2);

// // // modulus    %

// // console.log(5 % 2);

// // // exponencial  **

// // console.log(4**4);//  -- 4^4 = 4*4*4*4

// // // increament   ++  = +1

// // // pre inc  = ++var

// // // post inc = var++

// // // decreament    --  = -1

// // // pre dec  = --var

// // // post dec = var--

// // let a1 = 10

// // a1--

// // console.log(a1);

// // // searching element first find in variable side, you can calculate that value side till the variable.

// // let a2 = 2

// //     a2 = ++a2

// //     console.log(a2);

// //   // searching element first find in value side, you can calculate that value side entair the variable.

// // let a3 = 3

// // let a4 = a3++

// // console.log(a3 , a4); // 4 , 3

// // // example :-

// // let a5 = 1

// // let a6 = ++a5  // ++1 = 2

// // // let a7 = a6--  // 2

// // // console.log("a5 ", a5); // 2       // 2
// // // console.log("a6 ", a6); // 1  2    // 1
// // // console.log("a7 ", a7); // 1       // 2

// // // // 2. Assignment operator

// // // let num = 100

// // // let AdditionVal = 20

// // //     // num = num + AdditionVal

// // //     num *= AdditionVal

// // //     console.log(num);

// // // console.clear();

// // // // 3. Relational operator

// // // // meaning          syntex        example       result

// // // // greaterThen         >            5>2         true

// // // // lessThen            <            5<2         false

// // // // greaterThenEq       >=           5>=5        true

// // // // lessThenEq          <=           5<=7        true

// // // // loosyTypeEq         ==           5=="5"      true

// // // // loosyNotEq          !=           5!="5"      false

// // // // strictlyTypeEq      ===          5==="5"     false

// // // // strictlyNotEq       !==          5!=="5"     true

// // // // 1
// // // console.log(10 > 5)    // true

// // // // 2
// // // console.log(15 < 8)    // false

// // // // 3
// // // console.log(20 >= 20)  // true

// // // // 4
// // // console.log(7 <= 3)    // false

// // // // 5
// // // console.log(12 == "12") // true

// // // // 6
// // // console.log(25 != "25") // false

// // // // 7
// // // console.log(30 === "30") // false   // 30 === "30" = false

// // // // 8
// // // console.log(18 !== "18") // true    // 18 !== "18" = true

// // // // 9
// // // console.log(50 >= 45)   // true

// // // // 10
// // // console.log(9 < 2)      // false

// // // // 4. logical operator

// // // // AND  - &&

// // // // true && true && true = true

// // // // false && true && true = false

// // // // OR  - ||

// // // // true || true || true = true

// // // // true || false || false = true

// // // // false || false || false = false

// // // // NOT - !

// // // // !true = false

// // // // !false = true

// // // console.clear();

// // // // AND - &&

// // // console.log(10 > 5 && 20 > 15)   // true && true = true

// // // console.log(8 > 12 && 30 > 10)   // false && true = false

// // // console.log(50 >= 50 && 25 < 40) // true && true = true

// // // // OR - ||

// // // console.log(10 > 20 || 15 > 5) // false || true = true

// // // console.log(7 < 3 || 9 < 2)    // false || false = false

// // // console.log(100 === 100 || 50 < 10) // true || false = true

// // // // NOT - !

// // // console.log(!(10 > 5))   // false  // !(true) = false

// // // console.log(!(20 < 10))  // true   // !(false) = true

// // // console.log(!(50 === "50")) // true // !(false) = true

// // // console.log(!(15 !== "15")) // false // !(true) = false

// // // // 5. ternary operator

// // // // condition ? statement : statement ;

// // // // 5===5  ? alert("condition true") : alert("condition false")

// // // concatination - (+)

// // let one = "iron";
// // let two = "man";

// // console.log(one + " " + two);

// // // Template litral or string

// // let a1 = "spider";
// // let a2 = "man";

// // console.log(`${a1} ${a2}`);

// // // Type casting

// // // 1. implicit TC

// // // string - string anything is string

// // console.log(typeof ("hello" + "hi"));
// // console.log(typeof ("hello" + 1));
// // console.log(typeof ("hello" + true));
// // console.log(typeof ("hello" + undefined));
// // console.log(typeof ("hello" + null));

// // console.log(typeof ("hello" + [1, 2, 3]));
// // console.log(typeof ("hello" + { l: 1 }));

// // // number

// // console.log(typeof (1 + "hi"));
// // console.log(typeof (1 + 1));
// // console.log(typeof (1 + true));
// // console.log(typeof (1 + undefined));
// // console.log(typeof (1 + null));

// // console.log(typeof (1 + [1, 2, 3]));
// // console.log(typeof (1 + { k: 4 }));

// // // boolean

// // console.log(typeof (true + "hello"));
// // console.log(typeof (true + 1));
// // console.log(typeof (true + true));
// // console.log(typeof (true + undefined));
// // console.log(typeof (true + null));

// // console.log(typeof (true + [1, 2]));
// // console.log(typeof (true + { r: 4 }));

// // console.clear();

// // // 2. explicit TC

// // // constractor

// // // number constractor - Number()

// // console.log(Number("1") + 1);

// // console.log(Number());
// // console.log(Number(""));
// // console.log(Number("123"));
// // console.log(Number("abc"));
// // console.log(Number(-1));
// // console.log(Number(true));
// // console.log(Number(false));
// // console.log(Number(undefined));
// // console.log(Number(null));

// // console.log(Number([1, 2]));
// // console.log(Number({ l: 4 }));

// // // boolean constractor - Boolean()

// // console.log(Boolean());
// // console.log(Boolean(""));
// // console.log(Boolean("123"));
// // console.log(Boolean("abc"));
// // console.log(Boolean(-1));
// // console.log(Boolean(0));
// // console.log(Boolean(true));
// // console.log(Boolean(false));
// // console.log(Boolean(undefined));
// // console.log(Boolean(null));

// // console.log(Boolean([1, 2]));
// // console.log(Boolean({ l: 1 }));

// // console.log(Boolean("0"));

// // console.log(Boolean("h"));

// // console.clear();

// // // Flow Control Statement

// // //  1. conditional statement

// // // 1.  if statement

// // // if(condition){statement}

// // // condition true = true , false = not allow

// // console.log("hi");

// // if (" ") {
// //   console.log("hello everyone");
// // }

// // console.log("hello");

// // // 2. if else statement

// // // syntex : -

// // // if(condition){
// // //     statement
// // // }else{
// // //     statement
// // // }

// // // flow :-

// // // if condition = true { allow } , condition = false = else { allow }

// // // example

// // if (0) {
// //   console.log("i gave the condition true");
// // } else {
// //   console.log("i gave the condition false");
// // }

// // // else if statement

// // // session finder

// // // let hour = prompt("tell now time hour");

// // // if (hour >= 1 && hour <= 6) {
// // //   alert("Early morning");
// // // } else if (hour >= 7 && hour <= 12) {
// // //   alert("good morning");
// // // } else if (hour >= 13 && hour <= 15) {
// // //   alert("Good Afternoon");
// // // } else if (hour >= 16 && hour <= 18) {
// // //   alert("Good Evening");
// // // } else if (hour >= 19 && hour <= 24) {
// // //   alert("Good Night");
// // // } else {
// // //   alert("time is invalid");
// // // }

// // // nested if Statement

// // // let age = prompt("enter your age");
// // // let height = prompt("enter your height cm");
// // // let weight = prompt("enter your weight kg");

// // // if (age >= 18) {
// // //   if (height >= 160) {
// // //     if (weight >= 60) {
// // //       alert("your are eligible");
// // //     } else {
// // //       alert("your weight is not eligible");
// // //     }
// // //   } else {
// // //     alert("your height is not eligible");
// // //   }
// // // } else {
// // //   alert("your age is not eligible");
// // // }

// // // 5. switch statement

// // // switch(condition){

// // //     case value : statement ; break;
// // //     case value : statement ; break;
// // //     case value : statement ; break;
// // //     case value : statement ; break;

// // // }

// // let trafficLight = "";

// // switch (trafficLight) {
// //   case "red":
// //     console.log("vechile stop");
// //     break;
// //   case "yellow":
// //     console.log("vechile start");
// //     break;
// //   case "green":
// //     console.log("vechile go..");
// //     break;
// //   default:
// //     console.log("have a good day");

// //     break;
// // }

// // // else if

// // // let subject = prompt("enter your exam mark in 50");

// // // if (subject >= 40) {
// // //   console.log("very good");
// // // } else if (subject >= 30) {
// // //   console.log("good");
// // // } else if (subject >= 20) {
// // //   console.log("average");
// // // } else if (subject >= 10) {
// // //   console.log("poor");
// // // } else {
// // //   console.log("fail");
// // // }

// // //  2. looping statement


// // // for loop 

// // // syntex :- 


// // // for(intialiazation ; condition ; iteration ){
// // //     statement 
// // // }


// // for(let a = 1 ; a <= 3 ; a++ ){
// //     console.log(a); // 1 2 3
    
// // }


// // // let a = 1 ; 1 <= 3 = true ; 1++ = 2

// // // let a = 2 ; 2 <= 3 = true ; 2++ = 3

// // // let a = 3 ; 3 <= 3 = true ; 3++ = 4

// // // let a = 4 ; 4 <= 3 = false . 




// // // while loop 

// // // intialization 

// // // while(condition){
// // //     statement

// // //     iteration 
// // // }


// // let val = 2

// // while(val>=0){

// //     console.log("while loop :- ",val);
    
// //     val--
  
// // }


// // // val = 2 , 2 >= 0 = true , log(2) , val-- = 2-- = 1
// // // val = 1 , 1 >= 0 = true , log(1) , val-- = 1-- = 0
// // // val = 0 , 0 >= 0 = true , log(0) , val-- = 0-- = -1
// // // val = -1, -1>= 0 = false.


// // // do while loop 

// // // intialiazation 

// // // do{
// // //     statement

// // //     iteration
// // // }

// // // while(condition)


// // let val1 = 2

// // do{
// //     console.log("do : ",val1);

// //     val1--
    
// // }

// // while(val1>=0)



// // // for of loop - string , array , function

// // let str1 = "javascript"

// // // for(declration type variable){

// // //     console.log(var name);
    

// // // }


// // for(let a of str1){
// //     console.log(a);
    
// // }

// // let arr = ["apple","banana","orange","guava"]

// // for(var b of arr){
// //     console.log(b);
    
// // }


// // // for in loop - object 

// // let emp = {
// //     name1 : "john",
// //     role  : "developer",
// //     salary: 200000
// // }

// // for(let c in emp){
// //     console.log(c , emp[c]);
    
// // }





// // let c = 2

// // while(c>=10){
// //     console.log(c);

// //     c--
    
// // }


// // let d = 2

// // do {
// //     console.log(d);

// //     d--
    
// // }

// // while(d>=10) // false.








// // // Function


// // block of code / 

// // easy to reuse  /

// // clean code     / 

// // easy debug     / 

// // reuse code    /

// // reuse value   /

// // trigger the event /



// // syntex : - 


// // function one(parameter){
// //      statement 
// //      return 
// //      yield
// // }

// // one(argument)




// function two(){

//     console.log("hello");

//     if(true){
//       console.log("good evening");
      
//     }

//     let arr = [1,2,3,4]

//     for(let a of arr){
//       console.log(a);
      
//     }
    
// }

// // two()



// function three(){
//   console.log("hi");


//   if(5>=5){
//     console.log("hello");


    
//   }
  
// }


// // three()



// function printingStatement(){

//   console.log("hi");
//   alert("hi")
//   confirm("welcome")
//   prompt("enter some :- ")
//   document.writeln("function")
  
// }

// // printingStatement()

// function dataTypes(){


//   console.log("primitive DataType");

//   console.log("string","number","boolean","undefined","null");

//   console.log("non primitive DataType");
  
//   console.log("array","object","function","date");
  
  
  
  
// }


// // dataTypes()


// // reuse Code 


// function formReuseCode(name,age,native,position){
//    console.log("name :",name);
//    console.log("age :" , age);
//    console.log("native :",native);
//    console.log("position :",position);
   
// }


// // formReuseCode("virat kohli",37,"Delhi","bat man")

// // formReuseCode("Ms Dhoni",45,"ranji","Keeper")




// // reuse Value   

// // return


// // bonus


// function bonus(salary,bonus1){
//      return salary + bonus1
// }


// let finalSalary = bonus(20000, 1000);

// // console.log(finalSalary);




// function hike(more){

//   console.log(finalSalary + more);
  

// }


// // hike(5000)





// // event Trigger


// // let para = document.querySelector("p")

// // function changeVal(){
// //   para.innerText = "login successfully"
// // }




// let emp1 = {
//   name1 : "john",
//   role  : "develper",
//   arrVal : ["1","2","3"],
//   empDetials : function(){

//     console.log("hi");
    

//   }
// }



// let arr  = ["hi"]


// function emp1Fun(){
  
//   console.log(emp1.name1);
//   console.log(emp1.role);

//   console.log(arr[0]);

  
  
  
// }


// // emp1Fun()



// // Types of Function 

// // named Function 

// function named(parameter){
  
//   console.log(parameter);
  
  
// }

// named("named function")


// // annonymous function 


// var annonymous = function(parameter){
//   console.log(parameter);
  
// }

// annonymous("annoymous function")


// // arrow function 

// var arrow = (parameter)=>{
  
//   console.log(parameter);
  
  
// }

// arrow("arrow function")



// // scope :- 


// function checkScope(){
//   if(1){
//     var fun1 = "global scope"
//     let fun2 = "block scope"
//     const fun3 = "block scope 1" 

//     console.log(fun2);
//     console.log(fun3)
//     console.log(fun1);
//   }


  
  
// }

// checkScope()



// // hoisting

// console.log(fun1);

// var fun1 = 10



// let fun2 ;
// console.log(fun2);



// const fun3 = 4

// console.log(fun3);


// self invoke function 


// (function(parameter){

//   statement
//   return 
//   yield

// })(argument)



// example :- 


// (function(product,discount){
//   alert(`now offers going on product is ${product} , discount is ${discount} % .  `)
// })("summer things", 55)



// higher order function and callback function 


function function1(){
  console.log("higher order function");
  
}

function function2(){
  console.log("callback function");
  
}

function1(function2())










// example :- 


let add = function(callback,a,b){ // callback = sub,a = 20,b = 40
  console.log(a+b);         // 20 + 40 = 60
  callback(20,20)           // sub(20,20)
  
}


let sub = function(num1,num2){
   console.log(num1 - num2); // 20 - 20 = 0
   
}


add(sub,20,40)  

// -20 , 40 
//  40 , -20
//  60 , 0




function emp2(name,callback){   // name = john , callback = done
   console.log("hello "+name);  // "hello john"

   callback()  // done() 
   
}

function done(){
  console.log("completed");
  
}


emp2("john",done)



function clgForm(name = "not give",department = "not give",cgpa = "not give",isDisability = "no"){

  console.log("name ",name);
  console.log("department ",department);
  console.log("cgpa ",cgpa);
  console.log("isDisability ",isDisability)
  
  
}

clgForm("kamal","ece","9","no")




// currying stracture


function a(a){
  return function b(b){
    return function c(c){

      console.log(a+b+c);
      

    }
  }
}


a(10)(20)(30)


// uncurrying

function a1(a,b,c){
  console.log(a+b+c);
  
}

a1(10,20,30)





// generator function 

function* gen(){
  yield "10% cashback got"
  yield "better luck next time"
  yield "50% flat off"
  yield "100rs cashback you got"
}

let genVal = gen()

for(let a of genVal){
  console.log(a);
  
}

// console.log(genVal.next().value);
// console.log(genVal.next().done);
// console.log(genVal.next().value);



// if(genVal.next().done){
//   console.log("the function all value done");
  
// }else{
//   console.log("still not done function value");
  
// }



















// // // Date

