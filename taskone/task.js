`use strict`
var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");


var appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (var i = 0; i < 2; i++) {
    a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
        a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("Что-то пошло не так!")
        i--;
    }
}

/* i = 0;
while (i < 2) {
        a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
        a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("Что-то пошло не так!")
        i--;
    }
    i++;
}*/

/*i = 0;
do {
    a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null &&
        a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("Что-то пошло не так!")
      i--;
    }
    i++;
} while (i < 2); */

appData.moneyPerDay = appData.moneyData / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);


if (appData.moneyPerDay < 100) {
    console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Это высокий уровень достатка!");
} else {
    console.log("Произошла ошибка");
}