import { BankAccount } from "./bank-account"

describe('BankAccount Unit Test', () => {

  it('should create a bank account',() => {
    const bankAccount = new BankAccount('123a',300,'33333');

    expect(bankAccount.id).toBe('123a');
    expect(bankAccount.balance).toBe(300),
    expect(bankAccount.account_number).toBe('33333');
  })

  it('should debit an account', () => {
    const bankAccount = new BankAccount('123a',300,'33333');
    bankAccount.debit(100);

    expect(bankAccount.balance).toBe(200);
  })

  it('should credit an account', () => {
    const bankAccount = new BankAccount('123a',300,'33333');
    bankAccount.credit(100);

    expect(bankAccount.balance).toBe(400);
  })
})