// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.

enum TransactionType {
  Deposit,
  Withdraw
}

type Transaction = {
  accountNo: number;
  amount: number;
  type: TransactionType;
};

type BankAccount = {
  accountNo: number;
  firstname: string;
  lastname: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[]
}

const accounts: BankAccount[] = [];

function createAccount(accountNo: number, firstname: string, lastname: string, initialDeposit: number, isActive = true) {
  accounts.push({
    accountNo,
    firstname,
    lastname,
    balance: initialDeposit,
    isActive,
    transactions: []
  })
  return accounts
}

function processTransaction(accountNo: number, amount: number, transactionType: TransactionType) {
  let trans = ''
  let insufficient = 0
  accounts.forEach(account => {
    if (account.accountNo === accountNo) {
      if (transactionType === TransactionType.Deposit) {
        insufficient = 1
        trans = TransactionType[0].toLocaleLowerCase()
        account.balance += amount

        account.transactions.push({
          accountNo: account.accountNo, 
          amount: amount, 
          type: TransactionType[TransactionType.Deposit]        
        })

      } else if (transactionType === TransactionType.Withdraw) {
        if (account.balance < amount) {
          insufficient = 0
          trans = "Insufficient funds for withdrawal"
          
        }else{
          insufficient = 1
          trans = TransactionType[1].toLocaleLowerCase()
          account.balance -= amount

          account.transactions.push({
            accountNo: account.accountNo, 
            amount: amount, 
            type: TransactionType[TransactionType.Withdraw]
          })
        }
      }
    }
    
  })
  return insufficient === 0 ? `${trans}` : `${amount} ${trans} into account ${accountNo}`

}

function getBalance(accountNo: number) {
  let balance = 0
  accounts.forEach(account => {
    if(account.accountNo === accountNo){
      balance= account.balance
    } 
  })
  return balance
}

function getTransactionHistory(accountNo: number) {
  let arr
  accounts.forEach(account =>{
    if (account.accountNo === accountNo){
      arr = account.transactions
    }
  })
  return arr
}

function checkActiveStatus(accountNo: number) {
  let check
  accounts.forEach(account =>{
    if(account.accountNo === accountNo){
      check = account.isActive
    }
  })
  return check
}

function closeAccount(accountNo: number) {
  const index = accounts.findIndex(account => account.accountNo === accountNo)

  let alert =  `Account No: ${accounts[index].accountNo} is removed`
  
  if(index != -1){
    accounts.splice(index,1)
  } 

  return alert
}

// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)) // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)) // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)) // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)) // "Insufficient funds for withdrawal"
console.log(getBalance(1)) // 130
console.log(getTransactionHistory(1)) // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)) // true
console.log(closeAccount(1)) // "Account number 1 closed"