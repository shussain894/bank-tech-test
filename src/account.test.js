const Account = require('./account')

describe('Account', () => {

  beforeEach(() => {
    // lets create a new instance of a BankAccount for each test
    account = new Account();
  })

  it('begins with 0 balance', () => {
    expect(account.balance).toEqual(0);
  });
   it('can deposit money', () => {
    account.deposit(500);
    expect(account.balance).toEqual(500);
  });
  it('can deposit money sequentially', () => {
    account.deposit(500);
    account.deposit(500);
    expect(account.balance).toEqual(1000);
  });
  it('can withdraw money', () => {
    account.deposit(500);
    account.withdraw(100);
    expect(account.balance).toEqual(400);
  });
  it('can withdraw money sequentially', () => {
    account.deposit(500);
    account.withdraw(100);
    account.withdraw(100);
    expect(account.balance).toEqual(300);
  });
  it('throws an error when you try to withdraw more than your balance', () => {
    account.deposit(500);
    expect(() => account.withdraw(600)).toThrow('insufficient funds')
  })
})