const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('list')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dummyTransactions = [
    {id: 1, text: "Flower", amount: -20},
    {id: 2, text: "Salary", amount: -20},
    {id: 3, text: "Books", amount: -20},
    {id: 4, text: "Camera", amount: -20},
];

let Transactions = dummyTransactions;

function addTransactionDom(transaction){
    const sign = transaction[0].amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add(
        transaction[0].amount < 0 ? "minus" : "plus"
    )
    item.innerHTML = `
    ${transaction[0].text}<span>${sign}${Math.abs(transaction[0].amount)}</span>
    <button class="delete-btn" onclick="">X</button>
     `
     list.appendChild(item);
}

//update values
function updateValues(){
    const amounts = Transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
    const income = amounts.filter(item => item  > 0).reduce((acc, item) => (acc += item),0).toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0)*-1
    ).toFixed(2);
}

//init app
function Init(){
    list.innerHTML="";
    Transactions.forEach(addTransactionDom);
    updateValues();
}

addTransactionDom(Transactions);

