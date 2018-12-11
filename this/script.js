/**
 * 
 * [this] Rules:
 *  - Implicit Binding
 *  - Window Binding
 *  - Exciplict Binding
 *  - Lexical Binding
 *  -
 * 
 * 
 */

// let user = {
//     name: 'Mohamed',
//     greet: function () {
//         console.log('Hello ,', this.name);
//     }
// }

// user.greet();


// function foo() {
//     console.log(1, this.name);
// }
// var name = "Mohamed";


// let obj = { name: 'obj', foo: foo };
// let obj2 = { name: 'obj2', foo: foo };


// foo();
// obj.foo();
// obj2.foo();



// function greet(a, b, c) {
//     console.log('My name is :' + this.name + '  ' + 'a:' + a + ' b:' + b + ' c:' + c);
// }


// let user = {
//     name: 'Mohamed'
// }

// let user2 = {
//     name: 'Ahmed'
// }

// let arr = [1, 2, 3];

/**
 * 
 * Call 
 * 
 */
// greet.call(user, arr[0], arr[1], arr[2]);
// greet.call(user2, arr[0], arr[1], arr[2]);
// greet.call(user2, arr); ===> X

/**
 * 
 * apply
 * 
 */
// greet.apply(user, arr);
// greet.apply(user2, arr);



/**
 * 
 * 
 * bind
 * 
 */
// let greetUser = greet.bind(user);
// let greetUser2 = greet.bind(user2);

// greetUser(arr[0], arr[1], arr[2]);
// greetUser2(arr[0], arr[1], arr[2]);




// let user = {
//     name: 'Mohamed',
//     greet() {
//         setTimeout(function () {
//             console.log('Hello, ' + this.name);
//         }, 2000);
//     }
// }


// user.greet();



// let user = {
//     name: 'Mohamed',
//     greet() {
//         console.log('Hello,', this.name);
//     },
//     mother: {
//         name: 'Ahmed',
//         greet() {
//             console.log('Hello,', this.name);
//         }
//     }
// }


// user.greet();
// user.mother.greet();

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }


// let user = new User('Mohamed', 22);

// console.log(user);





// function greet(a, b, c) {
//     console.log('My name is :' + this.name + '  ' + 'a:' + a + ' b:' + b + ' c:' + c);
// }


// let user = {
//     name: 'Mohamed'
// }

// let user2 = {
//     name: 'Ahmed'
// }

// let arr = [1, 2, 3];


// greet.call(user, arr[0], arr[1], arr[2]);
// greet.apply(user, arr);
// greet.bind(user, arr[0], arr[1], arr[2]);

// let user = {
//     name: 'Mohamed',
//     greet: function() {
//         console.log(this.name)
//     }
// }

// var name = 'Ahmed';
// let bar = user.greet;
// bar.call(user);


// function foo() {
//     // this.a = 30;
//     setTimeout(function () {
//         console.log(1, this.a);
//     }, 2000);
// }

// var a = 20;

// foo();

