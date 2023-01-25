## Bank tech test

### What I aimed to achieve?

For this project I will be attempting my first tech test, the task is to design a simple software to manage a users bank account, it should be able to handle deposits and withdrawals and also printing an account statement. 

In addition, the main goal of this exercise is to practice creating professional quality code which displays my OO (object-oriented) design abilities i.e. my ability to plan out what classes, methods I need and how they will interact with each other. Also, to show my ability to use TDD (Test Driven Development) to drive the creation of classes and methods to produce well tested code.

#### The requirements for this project are listed below:

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

#### The acceptance criteria is:
- **Given** a client makes a deposit of 1000 on 10-01-2023
- **And** a deposit of 2000 on 13-01-2023
- **And** a withdrawal of 500 on 14-01-2023
- **When** she prints her bank statement
- **Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```


### How to install this software?
Step 1:
  - Please clone this repo

Step 2: 
  - Install all required dependencies using the following command
  
  ``npm install``


### How to run this software?
This software requires the use of the node REPL

First ensure you have completed the steps in **How to install this software?** 

#### Setting up node
Firstly:
`` cd src ``

Then open the node REPL by running the node command:
  
  ``node``

require the following file to load the software into the REPL

  ``const Account = require('./account.js')``

#### Creating an account
You can create your own bank account by creating an instance of the **BankAccount** class
  
  ``const myBank = new Account()``

#### displayBalance()
The ``displayBalance()`` method returns the total current balance of your account
  ```
  myBank.displayBalance()
  // expected output: 0
  ```

#### deposit()
The ``deposit()`` method is used to add money to your account
  ```
  // deposit 200 into the account
  myBank.deposit(200)

  myBank.displayBalance()
  // expected output: 200
  ```

#### withdraw()
The ``withdraw()`` method is used to remove money from your account
  ```
  // withdraw 150 from the account
  myBank.withdraw(150)

  myBank.displayBalance()
  // expected output: 50
  ```

  **note**
  you cannot withdraw an amount greater that the total balance of your account
  ```
  myBank.displayBalance()
  // expected output: 200

  myBank.withdraw(500)
  // expected output: Error 'insufficient funds'
  ```

#### printStatement()
The ``printStatement()`` method is used to print a summary of all transactions on the bank account
  ```
  myBank.displayBalance()
  // expected output: 0

  myBank.deposit(1000)
  myBank.deposit(2000)
  myBank.withdraw(500)

  myBank.printStatement()
  // expected output: 
  // date || credit || debit || balance
  // 26/03/2022 ||  || 500.00 || 2500.00
  // 26/03/2022 || 2000.00 ||  || 3000.00
  // 26/03/2022 || 1000.00 ||  || 1000.00
  ```


### Running tests
Testing for this project is done using Jest

To run tests, first ensure you have completed the steps in **How to install this software?** 

Then navigate to the project directory and run the following command:

  ``jest``


### My approach
This section details my approach to this tech test.

#### Stage 1 - Planning
I began by looking at the requirements and came up with the following general approach for this project:
  - I will be using JavaScript and Jest
  - This software will be run by loading it into Node and interacting with it by calling methods
  
I also did some basic design by mapping out what classes I would need and how they would interact: 
  - I will have an Account class which is responsible for handling deposits, withdrawals, balance and printstatement
  - Instead of adding additional responsibility to the BankAccount class for handling logic for printing statements 
  I decided to extract that into another class Statement which is responsible for keeping a log of deposits and 
  withdrawals and printing them to the user.

- I will not be using a database to store any information, so the data will be kept in memory for the current session only
