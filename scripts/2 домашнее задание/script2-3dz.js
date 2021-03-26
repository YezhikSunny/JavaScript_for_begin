"use strict";
/*3 задание
*/
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
//функция 3 задания
/**
 * функция для генироравания случайного числа
 * @returns - возвращает случайное число в диапозоне от -50 до 50
 */
 function randomstart() {
    return parseInt(Math.random()*100 - 50);
 }