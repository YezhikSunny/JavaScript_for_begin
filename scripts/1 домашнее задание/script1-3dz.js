"use strict";
alert("3 задание:");
/*
10 + 10 = 20
20 + "10" = 2010, так как число преобразовывается в строку
*/
let result = 10 + 10 + "10";
console.log(result);
/*
10 + "10" = "1010", так как число преобразовывается в строку
"1010" + 10 = 101010, так как число преобразовывается в строку
*/
result = 10 + "10" + 10;
console.log(result);
/*
10 + 10 = 20
20 + + "10" = 30, унарный плюс, превращает строку в число
*/
result = 10 + 10 + +"10";
console.log(result);
/*
число разделить на минус 0, потому что пустая строка, равно бесконечности, то есть -Infinity
*/
result = 10 / -"";
console.log(result);
/*
нельзя разделить число на строку,ожидается число, соответственно получается NaN - not a number
*/
result = 10 / +"2,5";
console.log(result);