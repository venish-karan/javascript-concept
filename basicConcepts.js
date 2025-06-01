// 1. Basic console log
console.log("Venish");

// 2. String split method
const str = "venish";
console.log(str.split("")); // ['v', 'e', 'n', 'i', 's', 'h']

// 3. startsWith method
console.log(str.startsWith("ven", 0)); // true

// 4. Number precision
const num = 123.899;
console.log(num.toPrecision(3)); // "124"

// 5. Number formatting with toLocaleString
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"

// 6. Number MAX_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// 7. Object creation and optional chaining
const obj = new Object();
obj.fullname = {
    userfullname: {
        firstname: "Venish",
        lastname: "P",
    }
};
// Optional chaining (avoids TypeError if property doesn't exist)
console.log(obj?.fullname?.username?.firstname); // undefined

// 8. Array concatenation and typeof
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(typeof arr3[1]); // "number"

// 9. Custom timestamp formatting
const date = new Date();
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
const yyyy = date.getFullYear();
const hh = String(date.getHours()).padStart(2, '0');
const min = String(date.getMinutes()).padStart(2, '0');
const ss = String(date.getSeconds()).padStart(2, '0');
const timestamp = `_${yyyy}${mm}${dd}${hh}${min}${ss}`;
console.log(timestamp); // e.g., _20250601152330

// 10. Variable scope and reassignment
let a = 100;
if (true) {
    a = 10; // This modifies 'a' in the same scope
}
console.log(a); // 10