"use strict";
/*5 задание
*/
a = +prompt("Какое первое число?");
b = +prompt("Какое второе число?");
operate = prompt("Какую операцию хотите выполнить: сложение, вычитание, умножение или деление?");
let result = mathOperation(a, b, operate);
alert(result);
//функции 5 задания
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'сложение':
            return  sum(a,b);
        
        case 'вычитание':
            return  subtraction(a,b);
        
        case 'умножение':
            return  multiplication(a,b);

        case 'деление':
            return  division(a,b);
        default:
            alert("Введите одно из приведённых значений");
            operate = prompt("Какую операцию хотите выполнить: сложение, вычитание, умножение или деление?");
    }
}