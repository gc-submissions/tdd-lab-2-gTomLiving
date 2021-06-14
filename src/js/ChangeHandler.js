/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
        
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      switch(type) {
        case 'quarter' :
          this.cashTendered += 25;
          break;
        case 'dime' :
          this.cashTendered += 10;
          break;
        case 'nickel' :
          this.cashTendered += 5;
          break;
        case 'penny' :
          this.cashTendered += 1;
          break;
      }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {

      switch (this.cashTendered >= this.amountDue) {
        case true :
          return true;
        case false :
          return false;
      }
      

    }

    giveChange() {
        // TODO return the correct change in the following format...
        let change = (this.amountDue - this.cashTendered);
        let quarters = 0;
        let dimes = 0;
        let nickels = 0; 
        let pennies = 0;
        console.log(change);

        while (change > 0) {
          if(change >= 25) {
            quarters++;
            change -= 25;
          }
          else if (change >= 10){
            dimes++;
            change -= 10;
          }
          else if (change >= 5) {
            nickels++;
            change -= 5;
          }
          else {
            pennies++;
            change -= 1;

          }
          
          
          
        }
        return {
          quarters: quarters,
          dimes: dimes,
          nickels: nickels,
          pennies: pennies
        }

        
    }
}

// const newChangTest = ChangeHandler(50);
// newChangTest.insertCoin('penny');
// newChangTest.insertCoin('penny');
// newChangTest.insertCoin('penny');
// newChangTest.insertCoin('nickel');
// newChangTest.insertCoin('dime');

// console.log(newChangTest.giveChange());




module.exports = ChangeHandler;