# steps to achieve 👍

## Talk about stuff

* microsoft made ts 
  * tight integration with vscode

## install ts

* first install typescript with npm 

```bash
# install typescript globally
npm install -g typescript
# check the version of typescript you have installed
tsc -v 
# => Version 4.X.X
```

* create project directory

```bash
mkdir ts_sandbox && cd ts_sandbox
touch type_fun.ts
 # tsc --init
```

* talk about the Types - begin with string number and bool

```ts
// let varName: type = assignment
let helloTS: string = 'hello TypeScript'

console.log(helloTS)
```

* run `tsc type_fun.ts`
  * look at the output file
  * run the output file with `node type_fun.ts`
  * try to run the ts file with node
  * setup nodemon to monitor changes in type_fun.js in split console
  * setup tsc to moniter changes in type_fun.js `tsc -w type_fun.ts`
  * add `console.clear()` to the top of type_fun.js
* mix up the variable to be declaration and assignment in two separate lines and then turn it into a number
```ts
console.clear()

// let varName: type = assignment
let helloTS: string 
helloTS = 'hello TypeScript'
// this still compiles but ts yells at us
helloTS = 10

console.log(helloTS)
```

* show bools and numbers

```ts
// other basic types
let boolyBoi: boolean = true
let countyBoi: number = 42

console.log('ma boolyBoi', boolyBoi)
console.log('ma countyBoi', countyBoi)

boolyBoi = false 
countyBoi = 3.4 // float/int are just numbers

// math still works like js
countyBoi++ 
countyBoi *= 5
console.log('thats my countyBoi', countyBoi)

// type coercsion -- still a thing
helloTS += countyBoi
console.log(helloTS)
// helloTS -= countyBoi

// any type is like a swiss army knife
let swissBoi: any;
swissBoi = true
swissBoi = 'string'
swissBoi = 10

// omit the type annottation to get type inference from the assignment
let stringy = 'stringy'
let booly = true
let numby = 1010232342398.1
let lazyAny
lazyAny = true
lazyAny = 10

// consts 
const justInfer = 'im a string'
```

* show the union type and a couple use cases:
```ts
// the union type is two or more types in one var
let united: string | number

// using one var to parse a number to string
united = '10'
united = parseInt(united)
// console.log(united)

let numOrNull: number | null 

// ternary that returns two types
numOrNull = united > 5 ? united : null
// console.log(numOrNull)
```

## Container types

* show typed and generic arrays
```ts
// typed arrays
// typed array
let numList: number[] = [1, 2, 3]
let stringList: string[] = ['two', 'strings']
let multiverse: number[][] = [
  [1, 3, 54],
  [6, 5 ,8]
]  
// generic array way -- but this causes issues with TSX syntax 
// sometimes
let generic: Array<string> = ['so bland', 'generic more like basic af'] 
```

* make a custom type:

```ts
type stringOrNumber = string | number

const thisOnesAString: stringOrNumber = 'hello'
let thisOneIsANumber: stringOrNumber = 10
console.log(thisOnesAString)
```

* functions need typed parameters and typed return values
  * c lang calls this the function interface
```ts
// functions 
function compliment(person: string): string {
  return `I like your haircut ${person}! Lookin sharp!`
}

console.log(compliment('henry'))

// void return from a function
function complimentMany(people: string[]): void {
  people.forEach(person => {
    console.log(`hey ${person}, that is a cool pair of shoes!`)
  })
}

complimentMany(['henry', 'colin'])

// arrow function
const sayThanks = (complementer: string): void => {
  console.log(`thanks ${complementer}!`)
}

sayThanks('complement machine')
```

* interfaces are kind of object oriented and are multipurpose

```ts

interface Person {
  name: string,
  age?: number,
  sayCatchPhrase(): void
}

const typeScriptLover: Person = { }
```

* show errors and update:

```ts
// interfaces

interface Person {
  readonly name: string,
  age?: number,
  sayCatchPhrase(): void
}

const typeScriptLover: Person = { 
  name: 'Weston Digestion',
  sayCatchPhrase: () => console.log('sick.')
}

typeScriptLover.sayCatchPhrase()

typeScriptLover.age = 10 // at heart

// cant edit a read only property
// typeScriptLover.name = 'Wes'
```

* show classes

```ts
// Classes

class Cookie {
  // properties
  public type: string
  // optional property
  public rating?: number = 10
  // private property
  private _calories: number
  // constructor
  constructor(type: string, calories: number) {
    this.type = type
    this._calories = calories
  }

  // print cookie
  print(): void {
    console.log(`${this.type} cookie is rated ${this.rating}/10`)
    console.log(`dont event worry about those ${this._calories} calories`)
  }
}

const chocoChip = new Cookie('chocolate chip', 240)

chocoChip.print()

// show error
// chocoChip._calories

class FrostedCookie extends Cookie {
  public frosting: string
  constructor(type: string, calories: number, frosting: string) {
    super(type, calories)
    this.frosting = frosting
  }

  // method override
  print(): void {
    // call parent class's method if you like
    super.print()
    console.log(`and that ${this.frosting} frosting was to die for`)
  }
}

const carrotCake = new FrostedCookie('carrot cake', 320, 'cream cheese')

carrotCake.print()
```

* show tuples:
```ts
// tuples are like an array of fixed size

let twople: [string, number] = ['hello', 10]
// no, bad!
// twople = [13, 'bad news bears 🐻']
```

* show enums 
  * According to the TypeScript docs, Enums allow us to 'give friendly names to a set of numeric values'.


```ts
enum Color {Green, Red, Blue}
let colorChoice: Color = Color.Green
let colorString: string = Color[0]
```

### Stretch spin up an express server:

* make an express server:
* `npm init`
* `npm i exoress`
* `tsc --init`
* touch index.ts
* echo node_modules >> .gitignore

```ts
// ts uses import keyword
import express from 'express'

// config express app
const app = express()
// port is a union bc process.env
const PORT: number = 3001

// confunsing to know what type from packages -- ??
app.get('/', (req: any, res: any) => {
  res.send('hello from typescript!')
})

app.listen(PORT, (): void => {
  console.log(`you are listening to typescript fm on port ${PORT}`)
})
```

* talk about type declaration files and install
  * `npm i --save-dev @types/express @types/node`  
  * `tsc -p tsconfig.json` to use config file
