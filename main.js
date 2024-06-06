// JavaScript Arrays
const ingredients = ['flour', 'sugar', 'eggs', 'salt'];
ingredients.push('butter');
console.log(ingredients);

const lastItem = ingredients.pop()
console.log('lastItem:', lastItem)
console.log('Ingredients:', ingredients)

const capitalized = ingredients.map(item => item.toUpperCase());
console.log('cap', capitalized);
console.log('before', ingredients);

const filtered = ingredients.filter(item => item[0] === 's')
console.log('filtered', filtered);

// STRINGS
// Example: String Manipulation
let greeting = "Hello, World!";
console.log(greeting.length); // Outputs: 13
console.log(greeting.toUpperCase()); // Outputs: HELLO, WORLD!
console.log(greeting.substring(0, 5)); // Outputs: Hello
console.log(greeting.split(",")); // Outputs: ["Hello", " World!"]


let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.includes("fox")); // Outputs: true
console.log(sentence.indexOf("fox")); // Outputs: 16
console.log(sentence.lastIndexOf("the")); // Outputs: 31

// Regular Expressions
let pattern1 = /hello/;
console.log(pattern1.test("hello, world")); // Outputs: true

let pattern2 = /\\d+/; // Matches one or more digits
console.log(pattern2.test("abc123")); // Outputs: true
console.log("abc123".match(pattern2)); // Outputs: ["123"]


let post = "Hey @JohnDoe, did you see the new #JavaScript tutorial? #coding";

// Extract mentions (usernames) from the post
let mentions = post.match(/@[A-Za-z0-9_]+/g);
console.log("Mentions:", mentions);

// Extract hashtags from the post
let hashtags = post.match(/#[A-Za-z0-9_]+/g);
console.log("Hashtags:", hashtags);

// some more control flow
// switch case statement
/* syntax: switch( VARIABLE ) {
    case VALUE:
        code goes here
        .. more lines if necessary
        break
    case VALUE2:
        etc..
}
*/

const day =  new Date().getDay()
console.log(day)
const literalDay = new Date().toString()
console.log(literalDay)

switch (day) {
    case 0:
        console.log('Sunday Funday!')
        break
    case 1:
        console.log('Best day of the week :]')
        break
    case 2:
        console.log('tuesdayyy')
        break
    case 3:
        console.log("It's Wednesday my duuuudes")
        break
    default:
        console.log('some other day')
};


switch (literalDay.split(' ')[0]) {
    case "Sun":
        console.log('Sunday Funday!')
        break
    case "Mon":
        console.log('Best day of the week :]')
        break
    case "Tue":
        console.log('tuesdayyy')
        break
    case "Wed":
        console.log("It's Wednesday my duuuudes")
        break
    default:
        console.log('some other day')
};

//  JS Objects (Dictionaries)
const person = {
    name: "Shoha",
    age: 9001,
    faveColor: 'blue',
    faveLocations: ['Boston', "Los Angeles"],
    'Content-Type': {
        category: "Human",
        mode: "Beast"
    }
}
// acces data in obj
console.log(person['age'])  // bracket notation
console.log(person.age) // dot notation

//
const x = "name"
console.log(person['Content-Type'].mode)
console.log(person[x])
//



let person2 = {
    name: "Max",
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United', 'Liverpool']
        }
    ]
}

console.log(person2.teams[0].soccer[1])
console.log(person2.fav_color[2])

console.log(Object.keys(person2))
console.log(Object.values(person2))

// looping through keys
for (let item of Object.keys(person2)){
    console.log(item)
};

for (let key in person2){
    console.log(key)
};

// create our own protoype - ES5
function Car (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // make a method in a JS prototype
    this.printInfo = function(param) {
        console.log(param);
        return 'This car is a ' + this.year + ' ' + this.make + ' ' + this.model+'.'
    };
    this.method2 = function (param) {
        console.log(param)
        return `This car is a ${this.year} ${this.make} ${this.model}..`
    };
    this.method3 = () => {
        console.log('code goes here')
    };
};
// instantiate
const c1 = new Car('Honda', "Civic", 1999)
console.log(c1.printInfo('blah extra stuff'))

class Sentient {
    constructor(){
        this.sentient= true
        
    }
}

// create a class
class Human extends Sentient {
    constructor(name, age) {
        super()
        this.name = name
        this.age = age
        this.alive = true
    }

    // ES6 Syntax for creating a method
    printInfo = () => {
        if (this.alive) {
            console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
        }
        else {
            console.log('tough')
        }
    };

    // ES5 Syntax for creating a method
    func2() {
        console.log('this is func 2')
    }

    
};
class Baby extends Human{
    constructor(name, age, isWalking=false, isPottyTrained=false){
        super(name, age)
        this.isWalking = isWalking
        this.isPottyTrained = isPottyTrained
    }

    // method overriding
    func2() {
        console.log('this is BABYS func 2')
    }
    func3 = () => {
        console.log('this is func 3')
    }
};


const h1 = new Human("Shoha", 9002)
h1.printInfo()
h1.func2()


const b1 = new Baby('JackJack', 0, true)
b1.printInfo()
b1.func2()
console.log(b1.sentient)

// ASYNC JS SECTION
// JS Callback
// a call back function is a function that will be executed when an action has completed
const func1 = () => {
    console.log('Do function 1')
};

const func2 = (callback) => {
    console.log('things done prior to callback')
    callback()

};
func2(func1)


// Promises
//create a promise

const getMePokemon = (name) => {
    return new Promise((resolve, reject)=>{
        // this needs to take time..
        setTimeout(()=>{
            if (name == 'shoha'){
                reject('That pokemon does not exist')
            }
            resolve(`Successfully got ${name}'s data`)
        }, 5000)
    })
};


const response = getMePokemon('shoha')
console.log(response)

setTimeout(()=>{
    console.log(response)
}, 5001)


// two ways to repsond to a fulfilled/rejected promise
// old way (ES5 syntax) .then/.catch
getMePokemon('shoha')
.then((resolveData)=>{console.log(resolveData, 'from .then')})
.catch((rejectData)=>{console.log(rejectData, 'from .catch')})

// new way (ES6 syntax) await/async
const gettingPokeData = async () => {
    const res = await getMePokemon('shoha')
    console.log(res, 'from ASYNC version')
};
gettingPokeData()


async function gettingPokeData2 () {
    try{

        const res = await getMePokemon('ditto')
        console.log(res)
    } catch (error) {
        console.log(error)
    }
};
gettingPokeData2()