/*class y {
    toString() {
        return "Hello";
    }
}*/

var inst1 =  new x();
console.log(inst1.age);

function x() {
    'use strict';
    var age="32";
    return {age:age};
}

