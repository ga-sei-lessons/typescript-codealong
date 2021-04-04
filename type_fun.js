"use strict";
console.clear();
// let varName: type = assignment
let helloTS;
helloTS = 'hello TypeScript';
// this still compiles but ts yells at us
// helloTS = 10
// console.log(helloTS)
// other basic types
let boolyBoi = true;
let countyBoi = 42;
// console.log('ma boolyBoi', boolyBoi)
// console.log('ma countyBoi', countyBoi)
boolyBoi = false;
countyBoi = 3.4; // float/int are just numbers
// math still works like js
countyBoi++;
countyBoi *= 5;
// console.log('thats my countyBoi', countyBoi)
// type coercsion -- still a thing
helloTS += countyBoi;
// console.log(helloTS)
// helloTS -= countyBoi
// any type is like a swiss army knife
let swissBoi;
swissBoi = true;
swissBoi = 'string';
swissBoi = 10;
// omit the type annottation to get type inference from the assignment
let stringy = 'stringy';
let booly = true;
let numby = 1010232342398.1;
let lazyAny;
lazyAny = true;
lazyAny = 10;
// consts 
const justInfer = 'im a string';
// the union type is two or more types in one var
let united;
// using one var to parse a number to string
united = '10';
united = parseInt(united);
// console.log(united)
let numOrNull;
// ternary that returns two types
numOrNull = united > 5 ? united : null;
// console.log(numOrNull)
// typed arrays
// typed array
let numList = [1, 2, 3];
let stringList = ['two', 'strings'];
let multiverse = [
    [1, 3, 54],
    [6, 5, 8]
];
// generic array way -- but this causes issues with TSX syntax 
// sometimes
let generic = ['so bland', 'generic more like basic af'];
// functions 
function compliment(person) {
    return `I like your haircut ${person}! Lookin sharp!`;
}
console.log(compliment('henry'));
// void return from a function
function complimentMany(people) {
    people.forEach(person => {
        console.log(`hey ${person}, that is a cool pair of shoes!`);
    });
}
complimentMany(['henry', 'colin']);
// arrow function
const sayThanks = (complementer) => {
    console.log(`thanks ${complementer}! 👍`);
};
sayThanks('complement machine');
const typeScriptLover = {
    name: 'Weston Digestion',
    sayCatchPhrase: () => console.log('sick.')
};
typeScriptLover.sayCatchPhrase();
typeScriptLover.age = 10; // at heart
// cant edit a read only property
// typeScriptLover.name = 'Wes'
// Classes
class Cookie {
    // constructor
    constructor(type, calories) {
        // optional property
        this.rating = 10;
        this.type = type;
        this._calories = calories;
    }
    // print cookie
    print() {
        console.log(`${this.type} cookie is rated ${this.rating}/10`);
        console.log(`dont event worry about those ${this._calories} calories`);
    }
}
const chocoChip = new Cookie('chocolate chip', 240);
chocoChip.print();
// show error
// chocoChip._calories
class FrostedCookie extends Cookie {
    constructor(type, calories, frosting) {
        super(type, calories);
        this.frosting = frosting;
    }
    // method override
    print() {
        // call parent class's method if you like
        super.print();
        console.log(`and that ${this.frosting} frosting was to die for`);
    }
}
const carrotCake = new FrostedCookie('carrot cake', 320, 'cream cheese');
carrotCake.print();
// tuples are like an array of fixed size
let twople = ['hello', 10];
// no, bad!
// twople = [13, 'bad news bears 🐻']
// enums 
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let colorChoice = Color.Green;
let colorString = Color[0];
