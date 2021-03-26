"use strict";
/*6 задание
*/
let money = prompt("Сколько денег Вы хотите положить в банк?");
let k = money.charAt(money.length - 1);
k = parseInt(k);
moneyinbank(k, money);
//функции 6 задания
function moneyinbank(lastmoney,moneyk){
    switch (lastmoney) {
        case 0:
            alert("Ваша сумма в " + moneyk +" рублей успешно зачислена.");
            return;
        case 1:
            alert("Ваша сумма в " + moneyk +" рубль успешно зачислена.");
            return;
        case 2:
            alert("Ваша сумма в " + moneyk +" рубля успешно зачислена.");
            return;
        case 3:
            alert("Ваша сумма в " + moneyk +" рубля успешно зачислена.");
            return;
        case 4:
            alert("Ваша сумма в " + moneyk +" рубля успешно зачислена.");
            return;
        case 5:
            alert("Ваша сумма в " + moneyk +" рублей успешно зачислена.");
            return;
        case 6:
            alert("Ваша сумма в " + moneyk +" рублей успешно зачислена.");
            return;
        case 7:
            alert("Ваша сумма в " + moneyk +" рублей успешно зачислена.");
            return;
        case 8:
            alert("Ваша сумма в " + moneyk +" рублей успешно зачислена.");
            return;
        case 9:
            alert("Ваша сумма в " + moneyk +" рублей успешно зачислена.");
            return;
        default:
            alert('Нужно ввести сумму.'); 
    }   
}