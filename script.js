// // // javaScript

// // // scripting language

// // // 1. kjbhcjdbjksbkjbjchsbjkcbjhsdbjcbjsh
// // // 2. jbhjsbdjhbchjsdbvhjbfsdvhbkdjvhbv
// // // 3. jhshfhbsbhhufbsui


// // // variables 

// // // var  - global scope & function scope

// // // let  - block scope

// // // const - block scope


// // // rules : - 

// // // var rules 


// // var a = 20                // declration   // intialiazation

// //     a = 25               // reuse        // reinitialization

// // var a = 30                // reDeclration

// // console.log(a)


// // // let rules 

// // let b = 40

// //     b = 45

// // // let b = 50        // not accept redeclration

// // console.log(b);

// // // const rules - constant


// // const c = 60

// //     //   c = 65    not reuse , reintialization 

// // // const c = 70    not accept redeclration

// // console.log(c);



// // Examples :- 


// // 1. What is the output of the below code ?

// var a = 10
// a = 15
// var a = 20

// console.log(a) // 20


// // 2. Which keyword allows redeclaration ?

// // var


// // 3. Which keyword is used for constant values ?

// // constant


// // 4. Find the error in the below code

// let b = 30
// // let b = 40

// console.log(b) // syntex error


// // 5. What is reinitialization ? 

// //  


// // 6. What is the difference between var and let ?


// // 7. What is the output ?

// const c = 50

// console.log(c) // 50


// // 8. Can we reassign value to const ? 

// // 


// // 9. Which keyword does not allow redeclaration but allows reinitialization ?


// // 10. Write one example for:
// // a) var

// var a1 = 15

//     a1 = 20

// var a1 = 27

// console.log(a1);


// // b) let 

// let a2 = 20

//     a2 = 25

// // let a2 

// console.log(a2);



// // c) const 

// const a3 = 27

//     //   a3 = 50

// // const a3 

// console.log(a3);




// // printing Statement 


// // 1. console.log()

// console.log(100);

// let a5 = 123

// console.log(a5);



// // 2. alert()

// // alert(100)

// // let a6 = 1234

// // alert(a6)

// // 3. confirm()

// // confirm("did you like program")

// // 4. prompt()

// // prompt("what is your name")

// // 5. document.writeln()

// // document.writeln("sdhbjshbjcsd")


// // example :- 

// // 1. i want to print value "hello" in console side

// console.log("hello");


// // 2. i want to show "hello" to user the way is pop up

// // alert("hello")

// // 3. i want to print user age to console side

// // let userAge = prompt("enter your age")

// // console.log(userAge);


// // 4. i want to know user is complete html and css

// // let userCompletion = confirm("did you complete html,css")

// // console.log(userCompletion);



// // 5. i want to print in ui "batch 33"

// document.writeln("batch 33")


// console method 

// 1. console.log()

console.log(100);


// 2. console.warn()

console.warn(100);


// 3. console.error()

console.error(100)

// 4. console.clear()

console.clear()






// Data Types : - 

// 1. primitive dataTypes 

// 1. string  - "hello"

let a = "navi"

console.log(typeof(a));



// 2. number - 123

let b = 123

console.log(typeof(b));


// 3. boolean - true, false

let c = false 

console.log(typeof(c));


// 4. undefined

let d;

console.log(d);


// 5. null

// let e = prompt()

// console.log(e);


// 2. non primitive dataTypes


// Array

// syntex - []

let fruit = ["apple","orange","banana","cherry","giwi","pineApple","jack fruit"]

console.log(fruit);

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);


console.log(fruit[fruit.length-1]);
console.log(fruit[fruit.length-2]);



// Object 

// syntex :- {}


fruit = ["apple","orange","banana","cherry","giwi","pineApple","jack fruit"]

let obj = {
    redFruit : ["apple","cherry"],
    yellowFruit : ["banana","pineApple","jackFruit"],
    orangeFruit :"orange"
}


console.log(obj);
console.log(obj.redFruit[0]);
console.log(obj.yellowFruit[2]);
console.log(obj.orangeFruit);

console.clear();


// operator

// 1. Arithmrtic operator.


// Addition   +    

console.log(5 +  6);


// subraction +

console.log( 5 - 3);

// multiplication   *

console.log(5*2);

// division  - /

console.log(5 / 2);



// modulus    %

console.log(5 % 2);

// exponencial  **

console.log(4**4);//  -- 4^4 = 4*4*4*4


// increament   ++  = +1

// pre inc  = ++var

// post inc = var++


// decreament    --  = -1

// pre dec  = --var

// post dec = var--


let a1 = 10

a1--

console.log(a1);


// searching element first find in variable side, you can calculate that value side till the variable.


let a2 = 2

    a2 = ++a2

    console.log(a2);



  // searching element first find in value side, you can calculate that value side entair the variable.  


let a3 = 3

let a4 = a3++ 

console.log(a3 , a4); // 4 , 3


// example :- 


let a5 = 1

let a6 = ++a5  // ++1 = 2

let a7 = a6--  // 2


console.log("a5 ", a5); // 2       // 2
console.log("a6 ", a6); // 1  2    // 1
console.log("a7 ", a7); // 1       // 2


    


// 2. Assignment operator

let num = 100

let AdditionVal = 20

    // num = num + AdditionVal

    num *= AdditionVal


    console.log(num);
    

console.clear();


// 3. Relational operator

// meaning          syntex        example       result

// greaterThen         >            5>2         true

// lessThen            <            5<2         false

// greaterThenEq       >=           5>=5        true

// lessThenEq          <=           5<=7        true

// loosyTypeEq         ==           5=="5"      true

// loosyNotEq          !=           5!="5"      false

// strictlyTypeEq      ===          5==="5"     false

// strictlyNotEq       !==          5!=="5"     true



// 1
console.log(10 > 5)    // true 

// 2
console.log(15 < 8)    // false

// 3
console.log(20 >= 20)  // true

// 4
console.log(7 <= 3)    // false

// 5
console.log(12 == "12") // true 

// 6
console.log(25 != "25") // false

// 7
console.log(30 === "30") // false   // 30 === "30" = false

// 8
console.log(18 !== "18") // true    // 18 !== "18" = true

// 9
console.log(50 >= 45)   // true

// 10
console.log(9 < 2)      // false





// 4. logical operator

// AND  - &&

// true && true && true = true 

// false && true && true = false 


// OR  - ||


// true || true || true = true 

// true || false || false = true 

// false || false || false = false



// NOT - !


// !true = false 

// !false = true

console.clear();


// AND - &&

console.log(10 > 5 && 20 > 15)   // true && true = true

console.log(8 > 12 && 30 > 10)   // false && true = false

console.log(50 >= 50 && 25 < 40) // true && true = true


// OR - ||

console.log(10 > 20 || 15 > 5) // false || true = true

console.log(7 < 3 || 9 < 2)    // false || false = false

console.log(100 === 100 || 50 < 10) // true || false = true


// NOT - !

console.log(!(10 > 5))   // false  // !(true) = false

console.log(!(20 < 10))  // true   // !(false) = true

console.log(!(50 === "50")) // true // !(false) = true

console.log(!(15 !== "15")) // false // !(true) = false


// 5. ternary operator


// condition ? statement : statement ; 

// 5===5  ? alert("condition true") : alert("condition false") 







// Function 


// Date


