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