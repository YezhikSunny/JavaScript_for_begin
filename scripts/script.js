"use ctrict";
/*1 задание
*/
/*Пример 1
a = 1.
++a = a + 1, поскольку с префиксом, то с = a + 1.
c = 1 + 1 = 2.
Поэтому выведет 2.
А а будет равно с.
*/
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2
/*Пример 2
b = 1.
++a = a + 1, поскольку с постфиксом, то d = b, а b = 2.
d = 1.
Поэтому выведет 1.
*/
d = b++;
alert(d); //ответ: 1
/*Пример 3
a = 2;
++a = a + 1, поскольку с префиксом, то с = 2 + a + 1.
c = 2 + 2 + 1 = 5, а а = 2 + 1 = 3.
*/
c = 2 + ++a;
alert(c); //ответ: 5
/*Пример 4
a = 3;
b = 2;
d = 1;
b++ = b + 1 = 2 + 1 = 3, поскольку с префиксом, то d = 2 + b.
d = 2 + 2 = 4.
*/
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //ответ: 3
alert(b); //ответ: 3
/*2 задание
a = a*2 = 2*2 = 4;
x = 1 + 4 = 5;
Ответ: 5.
*/
a = 2;
let x = 1 + (a *= 2);
/*3 задание
*/
function randomstart() {
   return parseInt(Math.random()*100 - 50);
}
a = randomstart();
alert(a);
b = randomstart();
alert(b);
if (a>=0 && b>=0) {
    let s = a + b;
} else if (a<0 && b<0) {
    s = a * b;
} else if(a>=0 && b<0 || a<0 && b>=0) {
    s = a + b;
}
alert(s);
/*4 задание
*/
function sum(a,b) {
    return a + b;
}
function subtraction(a,b) {
    return a - b;
}
function multiplication(a,b) {
    return a * b;
}
function division(a,b) {
    return a / b;
}
let p =  sum(a,b);
alert('Сумма: ' + p);
p =  subtraction(a,b);
alert('Вычитание: ' + p);
p =  multiplication(a,b);
alert('Произведение: ' + p);
p =  division(a,b);
alert('Деление: ' + p);
/*5 задание
*/
/*6 задание
*/

