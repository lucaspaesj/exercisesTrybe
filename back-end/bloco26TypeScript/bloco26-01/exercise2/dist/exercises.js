"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rainbow = exports.Days = exports.circle = exports.trapezoid = exports.rhombus = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function rhombus(highDiagonal, lowDiagonal) {
    return highDiagonal * lowDiagonal / 2;
}
exports.rhombus = rhombus;
function trapezoid(highBase, lowBase, height) {
    return (highBase + lowBase) * height / 2;
}
exports.trapezoid = trapezoid;
function circle(radius) {
    return radius ** 2 * 3.14;
}
exports.circle = circle;
var Days;
(function (Days) {
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
    Days[Days["sunday"] = 7] = "sunday";
})(Days = exports.Days || (exports.Days = {}));
var Rainbow;
(function (Rainbow) {
    Rainbow[Rainbow["red"] = 1] = "red";
    Rainbow[Rainbow["orange"] = 2] = "orange";
    Rainbow[Rainbow["yellow"] = 3] = "yellow";
    Rainbow[Rainbow["green"] = 4] = "green";
    Rainbow[Rainbow["blue"] = 5] = "blue";
    Rainbow[Rainbow["indigo"] = 6] = "indigo";
    Rainbow[Rainbow["violet"] = 7] = "violet";
})(Rainbow = exports.Rainbow || (exports.Rainbow = {}));
