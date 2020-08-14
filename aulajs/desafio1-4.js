//----------------------------------------------------------------LINK DO DESAFIO NO GITHUB--------------------------------------------------------------//
// https://github.com/rocketseat-education/bootcamp-launchbase-desafios-01/blob/master/desafios/01-4-aplicacao-operacoes-bancarias.md#rocket-sobre-o-desafio
//-------------------------------------------------------------------------------------------------------------------------------------------------------//

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction)
    if (transaction.type == 'credit') {
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (transaction of user.transactions) {
        if (type == transaction.type && higherValue < transaction.value) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for (transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let credit = 0
    let debit = 0

    for (transaction of user.transactions) {
        if (transaction.type == "credit") {
            credit++
        } else {
            debit++
        }
    }

    return {
        credit,
        debit
    }
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }