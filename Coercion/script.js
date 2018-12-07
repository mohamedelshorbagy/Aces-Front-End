

// /**
//  * 
//  * Types :
//  *  Number
//  *  String
//  *  Undefined
//  *  Boolean
//  *  Function
//  *  Object
//  * 
//  * 
//  */



// var a = 'foo';
// var b = 22.5;
// var c = true;
// var d = {
//     key: 123
// }
// var x = function x() { }
// var f = null;


// console.log(0, typeof a);
// console.log(0, typeof b);
// console.log(0, typeof c);
// console.log(0, typeof d);
// console.log(0, typeof x);
// console.log(0, typeof f);
// console.log(0, typeof undefined);
// console.log(0, typeof typeof null);



/**
 * 
 * Number
 * 
 */
// var a = 3;
// console.log(a);



// console.log(Number(0))
// console.log(Number('foo'))
// console.log(Number([]))
// console.log(Number({}))
// console.log(Number(null))
// console.log(Number(undefined));
// console.log(Number([1, 3]));
// console.log(Number([1, , , , , , , , , 3]));
// console.log(Number([1, 2, [[[[, , , , , ,]]]]]));
// console.log(Number([[[[[5]]]]]));
// console.log(Number(['4']));


/**
 * 
 * NaN
 * 
 */
// var a = 'a' / 2;
// console.log(a);
// var d = NaN;
// console.log(0, typeof d);

// console.log(isNaN(2))
// console.log(isNaN(NaN))
// console.log(isNaN('foo'))
// console.log(isNaN({}))
// console.log(isNaN([]));
// console.log(isNaN([2]));
// console.log(isNaN([2, 3]));
// console.log(isNaN([2, , , , , , , ,]));






// console.log(NaN == NaN);


function checkNaN(x) {
    return x != x;
}


// console.log(checkNaN(2))
// console.log(checkNaN(NaN))
// console.log(checkNaN('foo'))
// console.log(checkNaN({}))
// console.log(checkNaN([]));
// console.log(checkNaN([2]));
// console.log(checkNaN([2, 3]));
// console.log(checkNaN([2, , , , , , , ,]));



// var a = [];
// var b = {};
// console.log(Number(a) == Number([]));
// console.log(b == b);


// console.log(Number(Infinity));
// console.log(1 / 0);
// console.log(Number(0));
// console.log(Number(-0));




/**
 * 
 * String
 * 
 */


// var a = 2.2 + '';
// console.log(0, a);

// console.log(0, String(0))
// console.log(0, String('2.6'));
// console.log(0, String('foo'))
// console.log(0, String(''))
// console.log(0, String([]))
// console.log(0, String(null))
// console.log(0, String(undefined));
// console.log(0, String(NaN));
// console.log(String([1, 2]));
// console.log(String({}))
// console.log(0, String([1, 3]));
// console.log(0, String([1, , , , , , , , , 3]));
// console.log(0, String([1, 2, [[[[, , , , , ,]]]]]));
// console.log(0, String([[[[[5]]]]]));
// console.log(0, String([10, 'data', 15]));
// console.log(0, String(function sum() { }));
// console.log(0, Number(function sum() { }));
// var b = {};
// console.log(0, String(b));
// console.log(0, String({ key: 123 }));
// console.log(0, String({
//     key:
//     {
//         data:
//         {
//             name: ['Mohamed', , , , , 3, 5],
//             age: 12
//         }
//     }
// }));


// var a = "b" + "a" + + "a" + "a";
// console.log(a);


/**
 * 
 * Boolean
 * 
 * 
 */

// var a = Boolean(undefined);
// console.log(a);



/***
 * 
 * Falsy Table : 
 * false
 * 0,-0,+0
 * ''
 * undefined
 * null
 * NaN
 * 
 */


// console.log(0, Boolean(0))
// console.log(0, Boolean('2.6'));
// console.log(0, Boolean('foo'))
// console.log(0, Boolean(''))
// console.log(0, Boolean([]))
// console.log(0, Boolean(null))
// console.log(0, Boolean(undefined));
// console.log(0, Boolean(NaN));
// console.log(Boolean([1, 2]));
// console.log(Boolean({}))
// console.log(0, Boolean([1, 3]));
// console.log(0, Boolean([1, , , , , , , , , 3]));
// console.log(0, Boolean([1, 2, [[[[, , , , , ,]]]]]));
// console.log(0, Boolean([[[[[5]]]]]));
// console.log(0, Boolean([10, 'data', 15]));
// console.log(0, Boolean(function sum() { }));
// console.log(0, Boolean(function sum() { }));
// var b = {};
// console.log(0, Boolean(b));
// console.log(0, Boolean({ key: 123 }));
// console.log(0, Boolean({
//     key:
//     {
//         data:
//         {
//             name: ['Mohamed', , , , , 3, 5],
//             age: 12
//         }
//     }
// }));





/*** Interview Questions */
// var a = {};
// var b = { key: 123 };
// var c = { key: 456 };


// a[b] = 708;
// a[c] = 789;


// console.log(a);



/**
 * 
 * Abstarct Equality Algorithm ==
 * Strict Equality Algorithm ===
 * 
 */

/**
 * 
 * Rule 1:
 *   Number , String
 * 
 */


// var b = '2';
// var c = 2;
// console.log(c == b);



/**
 * 
 * Rule 2:
 *  Number, Boolean
 * 
 */

// var b = 1;
// var c = true;
// console.log(b == c);



/**
 * 
 * Rule 3:
 *  Boolean , String
 * 
 * 
 */

// var b = true;
// var c = "1";
// console.log(b == c);


// var a = 1;
// if (a) {
//     console.log('yup');
// }


// var a = [];

// if (a) {
//     console.log('yup');
// }



// console.log(null == undefined);
// console.log('' == 0);
// console.log('' == []);
// console.log('' == false);
// console.log('' == null);
// console.log(false == null);
// console.log([] == null);
// console.log({} == null);








// console.log(3 > 2 > 1);
// console.log(3 < 2 < 1);

// var d = ![] + "";
// console.log(0, d);


// var a = (![] + [])[+[]] +
//     (![] + [])[+!+[]] +
//     ([![]] + [][[]])[+!+[] + [+[]]] +
//     (![] + [])[!+[] + !+[]];

// console.log(0, a);


// var a = {} + {};
// console.log(a);




