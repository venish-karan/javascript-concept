
```js
// ===============================
// 1. this Keyword Behavior
// ===============================

// In Node.js:
console.log(this); // {}

// In Browser:
console.log(this); // window (global object)
document.getElementById("btn").onclick = function() {
	console.log(this); // refers to the button element
};

// ===============================
// 2. Console Utility
// ===============================
console.table([var1, var2, var3]);

// ===============================
// 3. Variable Declarations
// ===============================

/*
| Keyword | Scope          | Reassignment | Hoisting | Use Case             |
|---------|----------------|--------------|----------|----------------------|
| const   | Block Scoped   | No           | No       | Constants            |
| let     | Block Scoped   | Yes          | No       | Preferred over var   |
| var     | Function Scoped| Yes          | Yes      | Not recommended      |
*/

// ===============================
// 4. ECMAScript & Data Types
// ===============================

// Primitive Types:
	// string
	// number (max: 2^53)
	// bigint
	// boolean
	// null (typeof = object)
	// undefined
	// symbol

// Non-Primitive:
	// object

// ===============================
// 5. Type Conversion
// ===============================

// To Number:
Number("33")         	// 33
Number("33abc")      	// NaN
Number(null)         	// 0
Number(undefined)    	// NaN
Number(true)         	// 1
Number(false)        	// 0

// To Boolean:
Boolean(1)           	// true
Boolean(0)           	// false
Boolean("hi")        	// true
Boolean("")          	// false

// To String:
String(33)           	// "33"

// ===============================
// 6. String Operations
// ===============================
console.log("1" + 2 + 2); 	// "122"
console.log(1 + 2 + "2"); 	// "32"
console.log(+true);       	// 1
console.log("");          	// ""
console.log(+"");         	// 0

// Pre/Post Increment:
++counter; 	// increments first, then returns
counter++; // returns first, then increments

// ===============================
// 7. Comparison Operators
// ===============================

// Loose vs Strict:
"2" == 2   	// true
"2" === 2  	// false

// null and undefined:
null == 0        	// false
null >= 0        	// true
null > 0         	// false
undefined == 0   	// false

// ===============================
// 8. Stack vs Heap Memory
// ===============================

// Stack (Primitive types)
let name = "venish";
let anotherName = name;
anotherName = "hi"; // original not affected

// Heap (Objects, Arrays, Functions)
const userOne = { name: "venish" };
const userTwo = userOne;
userTwo.name = "changed"; // userOne is also changed

// ===============================
// 9. Strings
// ===============================
const str1 = "text";
const str2 = new String("text");

str.length
str.toUpperCase()
str.charAt(1)
str.indexOf("e")
str.substring(0, 4)
str.slice(-3)
str.trim()
str.replace(" ", "-")
str.includes("abc")
str.split("")

// ===============================
// 10. Numbers & Math
// ===============================
num.toFixed(2)
num.toPrecision(3)
num.toLocaleString('en-IN')
Number.MAX_VALUE
Number.MIN_VALUE

Math.abs(-5)           	// 5
Math.round(3.4)        	// 3
Math.ceil(4.2)         	// 5
Math.floor(4.9)        	// 4
Math.random()          	// 0 - 1

// Random in range:
Math.floor(Math.random() * (max - min + 1)) + min;

// ===============================
// 11. Date & Time
// ===============================
const date = new Date();
date.toString();
date.toLocaleString();
date.getTime(); 				// ms since 1970
Date.now();
Math.floor(Date.now() / 1000);

date.toLocaleString('default', {
	weekday: 'long'
});

// ===============================
// 12. Arrays
// ===============================
arr.push(val)
arr.pop()
arr.unshift(val)
arr.shift()
arr.includes(val)
arr.indexOf(val)
arr.join()
arr.slice(1, 3)
arr.splice(1, 3)

// Combine Arrays:
arr1.concat(arr2)
[...arr1, ...arr2]

// Flatten Arrays:
arr.flat(Infinity)

// Other Array Utilities:
Array.isArray()
Array.from("abc")
Array.of(1, 2, 3)

// ===============================
// 13. Objects
// ===============================
const obj = {
	name: "Venish",
	age: 25,
	[Symbol("id")]: 123
};

// Access:
obj.name
obj["name"]

// Modify:
obj.name = "New"
Object.freeze(obj)

// Methods:
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
obj.hasOwnProperty('key')

// Destructuring:
const { name: userName } = obj;

// Merge:
Object.assign({}, obj1, obj2)
{ ...obj1, ...obj2 }

// Nested:
const user = {
	details: {
		name: "Venish"
	}
};
user.details.name;

// ===============================
// 14. Functions
// ===============================
function sayHello() {
	return "Hello";
}
sayHello.greeting = "Hi"; // functions are objects

// ===============================
// 15. Symbols
// ===============================
const id1 = Symbol("123")
const id2 = Symbol("123")
console.log(id1 === id2); // false
```
