const money = 200000; 
const percent = 0.10; 
const years = 2;
const allmoney = money * (1 + percent) ** years;
const pereplata = allmoney - money;

console.log(`Общая сумма выплаты по кредиту: ${allmoney.toFixed(2)} рублей`);
console.log(`Переплата по кредиту: ${pereplata.toFixed(2)} рублей`);