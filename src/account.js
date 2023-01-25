const Statement = require('./statement')

class Account {
  constructor(statement = new Statement()) {
  this.balance = 0
  this.statement = statement;
  this.activityLog = []
  }

  balance() {
    return this.balance
  }

  deposit(value) {
    this.balance += value
    const transactionInfo = {balance: this.balance, credit: value, debit: ''}
    this.#logActivity(transactionInfo)
  }

  withdraw(value) {
    if (this.balance < value) throw('insufficient funds')
    this.balance -= value 
    const transactionInfo = {balance: this.balance, credit: value, debit: ''}
    this.#logActivity(transactionInfo)
  }

  printStatement() {
    const data = this.statement.createStatement(this.activityLog);
    console.log(data.join('\n'))
  }

  getDate() {
    return this.#formattedDate()
  }

// private methods

  #logActivity(transaction, date = this.#formattedDate()) {
    this.activityLog.push({balance: transaction.balance, credit: transaction.credit, debit: transaction.debit, date: date})
  }

  #makeTwoDigits(num) {
    return num.toString().padStart(2, 0)
  }

  #formattedDate(date = new Date()) {
    const dd = this.#makeTwoDigits(date.getDate())
    const mm = this.#makeTwoDigits(date.getMonth())
    const yyyy = date.getFullYear()

    const dateString = `${dd}/${mm}/${yyyy}`
    return dateString
  }
};

module.exports = Account;