# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) TypeScript Crash Course

### Learning Objectives
- Describe advantages and disadvantages to using TypeScript
- Identify and use basic types, interfaces and additional TypeScript stuff
- Understand type inference and declaration
- Configure and use the typescript compiler

![worth it](https://media0.giphy.com/media/xT5LMVWdfSTiUh0Q0w/giphy.gif?cid=ecf05e47ggdryxmbzqr4d4xivapp6f2ec76muc0rs32uwhd4&rid=giphy.gif)
___

# Why TypeScript?

- Identifying bugs at compile time is better than finding them at runtime
- Type enforcement in large code bases reduces bugs across the organization/teams/time
- TypeScript allows ESNext syntax -- though many of the features highlighted by TS folks have been introduced with ES6 and 7
- Lowish barrier to entry
    - can use it sparingly to start (your JS is probably fine, just add some typings or `any`)
    - implicit and explicit typing 

# Disadvantages

- Adds complexity to your project
    - directory structure needs source and build
    - setup compiler or babel and/or webpack and build step
- TS compiler will yell at you for things that you have perceived as legal for the entirety of your JS career
- Advanced techniques can be a little confusing

# TypeScript Resources

* Docs are great: [TypeScript Docs / Handbook](https://www.typescriptlang.org/docs)
* Good resource put together by some benevolent dev: [TypeScript Deep Dive by @basarat](https://basarat.gitbooks.io/typescript/)
* [Adding Typscript to Create React App](https://create-react-app.dev/docs/adding-typescript/)
* Crashcoursey-style blog on [TypScript Type Notation](https://2ality.com/2018/04/type-notation-typescript.html)
* [Rules of Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
* [Learn x in y where x is TypeScript](https://learnxinyminutes.com/docs/typescript/)

## TypeScript Shell Commands Cheat Sheet

Handy table of TypeScript (and ats related) commands to keep in your back pocket:

| command | thing it does |
|---------|---------------|
| `npm install -g typescript` | installs TypeScript globall with npm |
| `tsc -v` | check your version of typescript |
| `tsc <fileName.ts>` | compiles `fileName.ts` to `fileName.js` |
| `tsc -w <fileName.ts>` | auto compiles `fileName.ts` to `fileName.js` on save (like nodemon) |
| `tsc --init` | creates a `tsconfig.json` |
| `tsc -p tsconfig.json` | compiles as a project using the config json, can be combined with the -w flag
| `tsc -p . -w` | run in the root dir with the tsconfig.json to watch and recompile project as it changes     
| `npm --save-dev @types/<package name>` | save type declaration files for node packages: example `npm i --save-dev @types/express @types/dotenv @types/node`
| `create-react-app --template typescript <react-app-folder-name>` | creates a new react app in a folder called `<react-app-folder-name>` with typescript as the base of the project
___

## Let's get started!

Install TypeScript and its compiler on your local machine!

```bash
# install typescript globally
npm install -g typescript
# check the version of typescript you have installed
tsc -v 
# => Version 4.X.X
```

We're all set!

Let's test it out
```bash
mkdir ts-crash-course && cd ts-crash-course
touch typeFun.ts
```

**typeFun.ts**
```typescript
let hello: string = "Hello, World!"
```
```bash
$ tsc typeFun.ts
$ ls
typeFun.js typeFun.ts

$ cat typeFun.js

var hello = "Hello, World!"
```

You will need to use `node typeFun.js` to see the actual output of your code, the `tsc` command (or TypeScript Compile) just makes the JS, but doesn't run it!

___

# Basic Types

We can get started with TypeScript by adding just a little extra cruft to the JS syntax we know and love. By now, you are all very familiar with the javascript primitives: `string`, `number`, `boolean`. TypeScript makes use of these primitives... and then adds to it!

## Applying Type constraints to variables

In order to apply type constraints to our variables with TypeScript, all we need to do is declare a `type` after the variable name, separated by a colon

```typescript
let myVariable: type = "my value"
```
|Basic Types| <= according to the TS Docs 🎉
|:---------:|---|
| `String`    | Your run of the mill string type  
| `Number`    | Can be used with decimal integers and floats as well as hex, octal and binary numbers 
| `Boolean`   | our old friends `true` and `false`
| `Any`       | oh my! you're telling me I don't actually have to plan ahead?
| `Array`     | lets add primitive typings to arrays (syntax may vary!) 
| `void`      | used for functions that do not return a value
| `null`      | `null`, yup
| `undefined` | `undefined`, that too 
| `Object`    | anything that is not `number`, `string`, `boolean`, `null`, or `undefined`
| `never`     | represents the type of values that never occur
| `Tuple`     | enforced typings on a specified number elements
| `Enum`      | Enforce a set of values -- we can use custom `Type`s in many cases

___
___

|Basic Types| <= according to my brain 🧠
|:---------:|---|
| `String`    | Your run of the mill string type  
| `Number`    | Can be used with decimal integers and floats as well as hex, octal and binary numbers 
| `Boolean`   | our old friends `true` and `false`
| `Any`       | oh my! you're telling me I don't actually have to plan ahead?
| `void`      | used for functions that do not return a value
| `null`      | `null`, yup

___

### `string`

```typescript
let myString: string = "Hello, World!"
let myTemplateLiteral: string = `"${myString}" is the phrase we always use when learning a new language.`
```

### `number`

```typescript
let myInt: number = 3;
let myFloat: number = 6.4;
let myHex: number = 0xf00d;
let myOct: number = 0o744;
let myBin: number = 0b1010;
```

### `boolean`
```typescript
let myBool: boolean = true;
myBool = false;
```

### `any`
When a data type is not known or required ahead of time, `any` can be used.
```typescript
let myAny: any = 'what should we throw in here?'
myAny = 7
myAny = true

// all ok!
```
However, if we know that a variable can accept both strings or numbers, TypeScript allows us to plan for this scenario with the `|` operator. (This is called a "Union" type and can be a more advanced technique)

```typescript
let myIndecisiveVar: string | number = 'This is ok!'
myIndecisiveVar = 5 // also ok!
myIndecisiveVar = false // Throws an error
```


### Arrays
TypeScript offers 2 options for enforcing type constraints on an array. 
1. Adding `[]` after a type declaration
2. Using angle brackets and the `Array` generic type
```typescript
let myStrings: string[] = ['Hello','World'];
let myStringArray: Array<string> = ['Hello','Squirrel'];

let myNums: number[] = [9,3,6,12];
let myNumArr: Array<number> = [3,3,3,3,3,3];

let arrayOfAny: any[] = ['what','is','purpose','of','this','array','?!', 2, true, {gross: "yup"}]
```
Be careful when using the angle bracket notation as it can cause conflicts when working with TSX, the TypeScript equivalent of JSX.

___
## Typing Functions

The format we used to add type constraints to our functions and methods is as follows:

```typescript
// function identifier(arg: type): returnType {}
function myFunc(arg: string, arg2: number): string {
    // myFunc logic
    return 'The string';
}

const myArrowFunc = (arg:string, arg2: number): string[] => {
    // logic
    return ['','',''];
}
```

If our function will not be returning anything, we can assign the return type `void`.

```typescript
function myVoidFunc(data: string[]): void {
    data.forEach( (datum: string): void => {
        console.log(datum)
    })
}

```

___
### Explicit vs Implicit Typing
All this extra syntax making your headspin?

The typescript compiler can infer some of your typings from the initial definition!

```typescript
let str: string = 'I am explicitly defined as a string type'
let otherStr = 'I am implicitly defined as a string type'

function printMsg(message: string): void {
    console.log(message)
}

printMsg(str) // Works!
printMsg(otherStr) // Also Works!
```

In essence, typescript looks at a variable that isn't typed (in this case `otherStr`) and says, "This looks like a string, follows the sytax of a string, must be a string!"

![Must be gelfling](https://66.media.tumblr.com/tumblr_m32hrruhGr1qdj4i3o1_r1_500.gif)

This will be more apparent and relevant when we get into interfaces and enforcing object type structures in the next section.

The rules that govern these type inferences can vary and/or be configured by the compiler. In general, if the data type is not primitive, it is unlikely that implicit typping will work.

___

## Unions
We can enforce types of multiple values with a type declaration on a union
```typescript
type Color = 'Green' | 'Red' | 'Blue'

let colorChoice: Color = 'Green' 
colorChoice: Color = 'Purple' // Throws an error
```
___
## Interfaces
What if we would like to enforce typings on the shape of an `object`?

**Enter the interface!**

Typescript offers us the ability to do this with `interfaces`:

```typescript

interface DogObject {
    name: string;
    age: number;
    isGood: boolean;
    wagsTail?: boolean;
}

function isGoodDog(dog: DogObject): boolean {
    let {name, age, isGood} = dog;
    let message = `${name} is ${age} and is very good!${dog.wagsTail ? ' wag, wag, wag' : ''}`
    if (!isGood) {
        console.log('How dare you! All dogs are good dogs!!')
        dog.isGood = true
    }
    console.log(message)
    return true
}

let oneGoodBoy: DogObject = {
    name: 'Harley Muffinhead',
    age: 7,
    isGood: true,
    wagsTail: true 
}

let barnCat: object = {
    name: 'Scar Tatteredear',
    age: Infinity,
    clawedKiller: true,
    isGood: false
}

isGoodDog(oneGoodBoy) 
// Works!
isGoodDog(barnCat) 
// Error, barnCat is not 'DogObject' type. Argument of type 'object' is not assignable to parameter 
// of type 'DogObject'. Type '{}' is missing the following properties from type 'DogObject': 
// name, age, isGood
// If we removed the Explicit typing from barnCat, isGoodDog(barnCat) would work because barnCat 
// has all the necessary values of the DogObject type


```


___

## Tuples
>Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. 

```typescript
let myStringNumTuple: [string, number] = ["Hello", 42];
myStringNumTuple = [42, "Hello"] // ☠️ will throw an error at compile time
```

When accessing an element with a known index, the correct type is retrieved:
```typescript
console.log(myStringNumTuple[0].substr(1)); // OK
console.log(myStringNumTuple[1].substr(1)); // Error, 'number' does not have 'substr'
```
When accessing an element outside the set of known indices, a union type is used instead:
```typescript
myStringNumTuple[3] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(myStringNumTuple[5].toString()); // OK, 'string' and 'number' both have 'toString'

myStringNumTuple[6] = true; // Error, 'boolean' isn't 'string | number'
```
___
## Enum
According to the TypeScript docs, Enums allow us to 'give friendly names to a set of numeric values'.

```typescript
enum Color {Green, Red, Blue}
let colorChoice: Color = Color.Green
let colorString: string = Color[0]
```
While this does enforce a `Color` Type that only has the values `"Green"`, `"Red"`, `"Blue"`... this little bit of TS compiles to this mess of JavaScript:
```js
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

var colorChoice = Color.Green; // evaluates to 0
var colorString = Color[0] // evaluates to "Green"
```

![WTF](https://media.giphy.com/media/ukGm72ZLZvYfS/giphy.gif)

If you want to know a bit more about this bizarre type and it's usage, check out [this medium article](https://medium.com/@KevinBGreene/typescript-enums-and-polymorphism-with-type-matching-fc3dc74b031c) and [this stack-overflow question](https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant). The tl;dr for most devs is that Enums can be iterated over, can be used as bit flags, and have some specific use cases, but you will mostly be using Union types.

I'm not saying that there are not uses for an `enum` in the wild... but if you are using it to enforce typings like this without the need for reverse mapping of integers to values etc... you are likely better off using a Union type.

___
## `Generics<T>`

What should we do if we want to enforce typings further down the scope of our function or class but don't want to explicity declare a type?

Well, TS humbly offers up the Generic type. 

We can use variables between angle brackets in our type declarations to enforce consistent use of a type! Classically, you will see `<T>` used to represent Type however, you can name them anything you want as long as they are not reserved words or types. We can even use multiple generics in the same construct by separating them with commas: `Construct<T, U, ThirdType>`.

Check out this example of a simple Queue:

```typescript
class Queue<T> {
    constructor(data: T[]){
        this.data = []
    }

    enqueue(payload: T): void {
        this.data.push(payload)
    }

    dequeue(): T {
        return this.data.unshift()
    }

}
```

We can also use complex datatypes:

```typescript
type BadMessage = 'Warning' | 'Error'
type GoodMessage = 'All is Well' | 'There is a fresh pot of coffee in the kitchen' 

function shout<T>(arg: T): string {

    return arg.toString().toUpperCase()
}

console.log(shout<BadMessage>('Warning'));
console.log(shout<BadMessage>('All is Well')); // Argument of type '"All is Well"' is not assignable to parameter of type 'BadMessage'.
console.log(shout<GoodMessage>('There is a fresh pot of coffee in the kitchen'));
```

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) TS Config and Declaration Files

## tsconfig
Our TypeScript Compiler offers many options for configuration and customization to fit your specific use case. 

Let's navigate to our ts_sandbox and see what it can do:
```bash
$ tsc --init
message TS6071: Successfully created a tsconfig.json file.
```

Oof!--that's a bit overwhelming when we are first getting started. More information on these options are available in the docs [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

For our codelalong today, let's use this pared down snippet.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "noImplicitAny": true,
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "build",
    "baseUrl": ".",
    "paths": {
      "*": [
        "node_modules/*"
      ]
    }
  },
  "include": [
    "src/**/*"
  ]
}
```

___

## Declaration Files and @types from npm

### **.d.ts**

TypeScript allows us to declare the shape of our types, variables and functions in separate files (for globals and/or modules). By using, the extension `.d.ts` the TypeScript Compiler/Linter can use these declarations in your project.

If you happen to be writing a library or working on a large project, this might be a good option. Today we will declare our types inline and at the head of our file.

[More information on Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

```typescript
// this function will return a string
declare function parseString(str: string): string;

// this var will be a number
declare var myNum: number;
// this var will be a string
declare var name: string;

// hey look an interface we can use of contact info
declare interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// the shape of a Cat class
declare class Cat {
  // the constructor accepts these args
  contructor(
    name: string,
    breed: string,
    age: number,
  )

  // methods for collecting and destroying
  collect(name: string, breed: string, age: number): void
  destroy(id: number): boolean
}
```

### **@types**

When using third-party libraries like Express, Sequelize or Mongoose it can be annoying and frustrating trying to determine what our Types should be. 

```typescript
// note the imports used in node for typescript 
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();
const port: number | string = process.env.PORT || 3001

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Wow I just wrote so much more code to accomplish this than I would with JavaScript')
})

app.listen(port, ():void =>{
  console.log(`"Typing" too much on port: ${port}`)
})

```

Lucky for us the fine folks at [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) have created a repo of type declarations that can be installed via npm for most of the libraries that are widely used.

```bash
$ npm i --save-dev @types/express @types/dotenv
```

Once installed, we can basically write normal javascript while implementing the Type guards of TS... making the example above look like this:

```js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port: number | string = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Wow I just wrote so much more code to accomplish this than I would with JavaScript')
})

app.listen(port, () => {
  console.log(`Feeling better about this on port: ${port}`)
})

```
___
