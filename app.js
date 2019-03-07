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

function greet(firstname, lastname, language) {
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
greetSpanish("First", "Last");