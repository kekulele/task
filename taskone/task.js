var money = prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");


var appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", "");
appData.expenses[a1] = a2;
var a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");
appData.expenses[a3] = a4;

alert(appData.moneyData / 30);