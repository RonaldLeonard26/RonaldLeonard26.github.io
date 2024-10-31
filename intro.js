"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(params) {
    return "".concat(params.firstName, " ").concat(params.lastName);
}
var personData = { firstName: 'Ronald', lastName: 'Leonard' };
console.log(getFullName(personData));
function wrapInArray(nilai) {
    return [nilai];
}
var numArray = wrapInArray(4);
var strArray = wrapInArray('hello world');
console.log(numArray);
console.log(strArray);
