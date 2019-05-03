/*var a;//  = 'Hello World!';

console.log(a);

if (a === undefined) {
        console.log('a is undefined!');
}
else {
        console.log('a is defined!');
}*/

/*function b(){
    console.log('Called b!');
}

b();*/


/*function b() {
    console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello World!';

console.log(a);*/


/*function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log(myVar);
   // console.log(this.myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();*/


/*function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 2;
a();*/

/*function a() {
    
    function b() {
        console.log(myVar);
    }
    
    var myVar = 2;
    b();
}

var myVar = 1;
a();*/


/*function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');*/

/*var isNew = true;
console.log(isNew);
isNew = 'yeha';
console.log(isNew);
isNew = 2;
console.log(isNew);*/

/*var a = 3 + 4 * 5;
console.log(a);*/

/*var a = 2,
    b = 3,
    c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);*/

/*var a = "1" + 2;
console.log(a);*/

//console.log(3 < 2 < 1);

/*var a = 0;

if (a || a === 0) {
    console.log('Something is there.');
}*/


/*function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet('Sigi');
greet();*/


/*var person = new Object();

person["firstname"] = "Sigi";
person["lastname"] = "Maier";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person["address"]["state"]);*/

/*var Tony = {
    firstname: 'Sigi',
    lastname: 'Maier',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);
greet({
    firstname: 'Mary',
    lastname: 'Doe'
});*/

/*var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);

var english = {};

var englishV2 = {
    greetings: {
        basic: 'Hello!'
    }
};

var spanish = {};

english.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english);
console.log(englishV2);*/

/*var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(objectLiteral);

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true}');

console.log(jsonValue);*/

/*function greet() {
    console.log('hi');
}

greet.language = 'english';

console.log(greet.language);*/


//greet();

/*function greet() {
    console.log('hi');
}

// anonymousGreet();

var anonymousGreet = function() {
    console.log('hii');
}

anonymousGreet();*/


/*function log(a) {
    //console.log(a);
    a();
}*/

/*log(3);
log("Hello");

log({
    greeting: 'hi'
});*/

/*log(function() {
    console.log('hi from function in log');
});*/

// by value (primitives)
/*var a = 3;
var b;

b = a;

a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))

var c = {greeting: 'hi'};
var d;
d = c;

c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)

function changeGreeting(obj) {
    obj.greeting = 'Hola';
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)

c = {greeting: 'howdy'};
console.log(c);
console.log(d);*/

/*console.log(this);

function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);
};

a();
b();

console.log(newvariable);




var c = {
    name: 'The c object',
    log: function() {
        var self  = this;
        
        console.log(self);
        this.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;
        }
        setname('Updated again! The c object');
        console.log(this);
    }
}

c.log();*/

/*var arr = [
    1,
    false,
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "Hello"
];

console.log(arr);

arr[3](arr[2].name);*/

/*function greet(firstname, lastname = 'Doe', language) {
    
    language = language || 'en';
    
    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('---------------');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0: ' + arguments[0]);
    console.log('---------------');
}

greet();
greet('John');
greet('John', 'Moe', 'ES');
*/

/*function greet(firstname, lastname, language) {
    language = language || 'en';
    
    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }
    
    if (language == 'es') {
        console.log('Hola ' + firstname + " " + lastname);
    }
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, "en");
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, "es");
}

greet("First", "Last", "en");
greet("First", "Last", "es");

greetEnglish("First", "Last");
greetSpanish("First", "Last");*/

/*function getPerson() {
    
    return {
        firstName: 'Tony'
    }
}

console.log(getPerson());*/

/*var 
    // first name of the person
    firstname,
    
    // last name of the person
    lastname,
    
    // the language
    // can be 'en' or 'es'
    laguage;

var person = {
    
    firstname: 'John',
    lastname: 'Doe'
}

console.log(person);*/


// function statement
/*function greet(name) {
    console.log('Hello ' + name);
}

greet('John');


// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
}

greetFunc('John');

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
   
    return 'Hello ' + name;
    
}('John');

console.log(greeting);*/


/*var firstname = 'John';

(function(name) {
    
    var greeting = 'Inside IIFE: hello';
    
    console.log(greeting + ' ' + name);
})(firstname); // IIFE

console.log(greeting);*/

/*(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + " " + name);
}(window, 'John'));

console.log(greeting);*/

/*function greet(whattosay) {
    
    return function(name) {
        console.log(whattosay + " " + name);
    }
}

//greet('Hi')('Tony');

var sayHi = greet('Hi');
sayHi('Tony');*/

/*function buildFunctions() {
    
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        
        arr.push(
        function() {
            console.log(i);
        });
    }
    
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFuncionts2() {
    
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        //let j = i; ES6
        arr.push(
            (function(j) {
               return function() {
                   console.log(j);
               }
            }(i)))
    }
    
    return arr;
}

var fs2 = buildFuncionts2();

fs2[0]();
fs2[1]();
fs2[2]();*/


/*function makeGreeting(language) {
    
    return function(firstname, lastname) {
        
        if (language === "en") {
            console.log("Hello " + firstname + " " + lastname);
        }
        
        if (language === "es") {
            console.log("Hola " + firstname + " " + lastname);
        }
    }
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("John", "Doe");
greetSpanish("John", "Doe");*/

/*function sayHiLater() {
    
    var greeting = "Hi!";
    
    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//    
//});

function tellMeWhenDone(callback) {
    
    var a = 1000; // some work
    var b = 2000; // some work
    
    callback(); // the "callback", it runs the function I give it!
}

tellMeWhenDone(function() {
    
    console.log("I am done!");
});

tellMeWhenDone(function() {
    
    alert("I am done!");
});

tellMeWhenDone(function() {
    
    console.log("All done...");
})*/


/*var person = {
    firstname: "John",
    lastname: "Doe",
    getFullName: function() {
        
        var fullname = this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    
    console.log("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + " " + lang2);
    console.log("............");
}

var logPersonName = logName.bind(person);

logPersonName("en");

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]);

(function(lang1, lang2) {
    
    console.log("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + " " + lang2);
    console.log("............");
}).apply(person, ["en", "es"]);

(function(lang1, lang2) {
    
    console.log("Logged: " + this.getFullName());
    console.log("Arguments: " + lang1 + " " + lang2);
    console.log("............");
}).call(person, "en", "es");


// function borrowing
var person2 = {
    
    firstname: "Jane",
    lastname: "Doe"
}

console.log(person.getFullName.apply(person2));

// function currying
function mulitply(a, b) {
    
    return a*b;
}

var multiplyByTwo = mulitply.bind(this, 2);

console.log(multiplyByTwo(3));

var multiplyByThree = mulitply.bind(this, 3);

console.log(multiplyByThree(3));
*/

/*function mapForEach(arr, fn) {
    
    var newArr = [];
    
    for (var i=0; i <  arr.length; i++) {
        
        newArr.push(
            fn(arr[i])
        )
    };
    
    return newArr;
}


var arr1 = [1,2,3];

console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
})

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
})

console.log(arr2);
console.log(arr3);


var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log(arr4);

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);*/

var arr1 = [1,2,3];

var arr6 = _.map(arr1, function(item) {return item * 3});

console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item) {return item % 2 ===0;});
console.log(arr7);