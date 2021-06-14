const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  
  //arrange
  const changeHandlerOne = new ChangeHandler(5);
  
  //for insert coin
  const changeInsertOne = new ChangeHandler(10);

  //insert coin take 2
  const chgITwo = new ChangeHandler(20);

  //checking payment sufficient
  //take 1
  const chgHandPayOne = new ChangeHandler(15);

  //give change tests
  const chgHandGiveChg = new ChangeHandler(50)

  changeInsertOne.insertCoin('nickel');
  changeInsertOne.insertCoin('penny');
  changeInsertOne.insertCoin('dime');

  chgITwo.insertCoin('quarter');
  chgITwo.insertCoin('nickel');

  chgHandPayOne.insertCoin('nickel');
  chgHandPayOne.insertCoin('nickel');
  chgHandPayOne.insertCoin('penny');
  chgHandPayOne.insertCoin('penny');
  chgHandPayOne.insertCoin('penny');
  chgHandPayOne.insertCoin('penny');
  chgHandPayOne.insertCoin('penny');

  //checking give change function

  chgHandGiveChg.insertCoin('penny');
  chgHandGiveChg.insertCoin('penny');
  chgHandGiveChg.insertCoin('penny');
  chgHandGiveChg.insertCoin('nickel');
  chgHandGiveChg.insertCoin('dime');





    //act

    test("checking constructor", function() {
      expect(changeHandlerOne.amountDue).toEqual(5);
    })
    test("checking the cashTendered", function() {
      expect(changeHandlerOne.cashTendered).toEqual(0);
    })
    //testing insert coin
    test("checking the insertCoin Function", function() {
      expect(changeInsertOne.cashTendered).toEqual(16);
    })

    //testing insert coin 2
    test('checking insert coin 2', function(){
      expect(chgITwo.cashTendered).toEqual(30);
    })
    test('checking paySuff method', function() {
      expect(chgHandPayOne.isPaymentSufficient()).toEqual(true);
    })
    //This fails

    // test('checking paySuff method', function() {
    //   expect(chgHandPayOne.isPaymentSufficient()).toEqual(false);
    // })

    test('check to see if the give change works', function() {
      expect(chgHandGiveChg.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2 });
    })






    
    


  
  
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small

    
    
    
    
    
  expect(ChangeHandler).toBeDefined();
  });

  // TODO: Add additional tests below...






});