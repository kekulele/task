var num = 54;
if (num < 54) {
    console.log("мало");
} else if (num > 100) {
    console.log("много!");
} else {
    console.log("Таки верно!")
}

(num == 54) ? console.log("Верно"): console.log("неверно!");

switch (num) {
    case num > 49:
        console.log("malo");
        break;
    case num < 100:
        console.log("mnogo");
        break;
    case 53: 
        console.log("Verno!");
        break;
    default:
        console.log("Что-то пошло не так");
        break;
}

let a = [1, 2, 3]; 
let b = [1, 2, 3]; 
if (a = b) {
    console.log("ok");
} else {
    console.log("nok"); 
}

console.log("Ёжик" > "яблоко");

console.log(typeof(1));