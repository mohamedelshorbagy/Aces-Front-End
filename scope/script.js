
// function foo() {
//     return undefined;
// }


// let result = foo();

// if (result && result.length) {
//     console.log('Have Value!');
// }

/**
 * 
 * Selector Operators
 *  
 * 
 */





// var a = 42;
// var data = a || 50;
// var andOp = a && 50;

// console.log(data);
// console.log(andOp);


// var a = 42;
// // var data = a || 50
// // var and = a && 50

// // Implicit Explicit Coercion 
// var data = a ? a : 50; // || Or Operator
// var and = a ? 50 : a; // && And Operator

// if(a) {

// }

// var x = +"3.1";
// var x = Number("3.1");



// var str = "data";
// // if(!!(~str.indexOf('n'))) {
// if (~str.indexOf('n')) {
//     // State : Found
// } else {
//     // State : Not Found!
// }


/**
 * 
 * Scope
 * 
 */


// var foo = "foo";


// function bar() {
//     var foo = "inside bar";
//     console.log(foo);
// }



// function baz(bam) {
//     foo = "baz";
//     console.log(bam);
// }

// bar();
// baz('data');
// console.log(foo);






// var a = 10;
// var c = 30;
// function foo() {
//     var a = 20;
//     function baz(c) {
//         console.log(a, b, c)
//     }
//     var b = 10;
//     // baz(b  * 4);
// }



// foo();



/**
 * 
 * Hoisting
 * 
 */

// var a;
// function foo() {
//     console.log('func()')
// } 
// a = 10;
// console.log(a);
// foo();
// var c;

// c = 20;
// console.log(c);


// function foo() {
//     var a;
//     var b;
//     function baz() {
//         var x;
//         x = 30;
//         console.log(a, b, c, x);
//     }
//     a = 10;
//     b = 20;
//     baz();

// }


// foo();


// function foo() {
//     function bar() {
//         return 8;
//     }
//     console.log('before', bar());
//     var bar = function () {
//         return 3;
//     }
//     console.log('after', bar());
// }

// foo();






// var a;
// var a;
// a = 20;
// a = 40;

// console.log(a);



// 'use strict';
// function foo() {
//     var d = 20;
//     function baz() {
//         a = 20;
//         console.log(d, b);
//     }
//     var b = 10;
//     baz();
// }


// foo();
// console.log(a);


// setTimeout(() => {
//     for (var i = 0; i < 10000000000000000; i++) {

//     }
// })



// console.log(1);
// setTimeout(function () {
//     console.log(2);
// }, 0);
// console.log(3);






/**
 * 
 * Closure
 * 
 * 
 */


// function foo() {
//     var bar = "data";

//     function baz() {
//         return bar;
//     }

//     return baz;
// }




// function data() {
//     var baz = foo();
//     console.log(baz());
// }

// data();



// var btn = document.querySelector('button');
// var a = 20;
// btn.addEventListener('click' , function btnClicked() {
//     console.log(a);
// })





// for (var i = 0; i < 5; i++) {
//     function bar(j) {
//         setTimeout(function () {
//             console.log(j);
//         }, j * 1000);
//     }
//     bar(i);
// }


// setTimeout(function () { console.log('First Set') }, 0);
// setTimeout(function () { console.log('Second Set') }, 0);
// setTimeout(function () { console.log('Third Set') }, 0);

// for (
//     var i = setTimeout(function () { console.log('inside Set', i); return i; }, 0);
//     i < 5;
//     i++
// ) {
//     console.log('Inside Loop', i);
// }












