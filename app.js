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


function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

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

