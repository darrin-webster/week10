// Display lkentg of all 5 viuarible types in console

var string = "This is a string";
var number = 3;
var boolean = false;
var array = [1, 2, 3, 4];
var object = {
	fish: 1,
	fries: 6,
	beaches: 2
};

console.log(number.length);
console.log(boolean.length);
console.log(array.length);
console.log(string.length);
console.log(object.length);

// sort array of number and array of strings
var strings = ["this", "is", "an", "array", "of", "strings" ];
var s = strings.sort();
var a = array.sort();

console.log(s);
console.log(a);

// reverse an array
x = array.reverse();
console.log(x);

// push a new item to the end of an array
array.push(5);

// remove last item of an array of objects using unshift
p = array.pop();
console.log(p);
console.log(array);

// Add a new object at the begging of an array of objects using unshift
u = array.unshift(0);
console.log(u);
console.log(array);

// remove the last object at the beggining of an array of objects using shift
s = array.shift();
console.log(s);
console.log(array);