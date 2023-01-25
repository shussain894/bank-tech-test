const Statement = require('./statement')

describe('Statement', () => {
  describe('createStatement()', () => {
    let statement; 

    const transaction1 = { balance: 2000, credit: 2000, debit: '', date: '15/01/2023' }
    const transaction2 = { balance: 3000 , credit: 1000, debit: '', date: '10/01/2023' }

    beforeEach(() => {
      statement = new Statement();
    })
    it('should return an array containing all required information', () => {
      const activityLog = [transaction1]

      expect(statement.createStatement(activityLog)).toEqual(['date || credit || debit || balance', '15/01/2023 || 2000.00 ||  || 2000.00'])
    })
    it('should return an array containing all required information', () => {
      const activityLog = [transaction2]

      expect(statement.createStatement(activityLog)).toEqual(['date || credit || debit || balance', '10/01/2023 || 1000.00 ||  || 3000.00'])
    })

  })
})