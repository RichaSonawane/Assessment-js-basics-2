///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log(summedPrice);
console.log("---------");

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
  let total = cartTotal + cartTotal * tax;
  let finalresult = total - couponValue;
  return finalresult;
}
console.log(calcFinalPrice(summedPrice, 2, 0.06));
console.log("----------")

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Creating an object called `customer` that has 7
    properties: 
        - cusiId:(number) its an unique identifier which will differentiate customers.hence it is number datatype. 
        -custName:(string) Its a string having name of customer.
        -custAddress: (string) string datatype since it is adress of customer.required for invoice and shipping.
        -phone: (number) phone number of customer for verification or deals related alerts.
        -textInvoice:(boolean) boolean so that it will be set according to customer preference.
                    It will be true if customer wishes to receive invoice related alerts on his mobile.
        -email:(string) it is an email id of customer having special characters hence string datatype.
        -defaultPaymentMethod:(string) this can be string having choices- card or cash or null depend on customer.this field will be set by customer input.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
  cusiId: 1,
  custName: "John",
  custAddress: "304 hackbright LockManager,texas",
  phone: 2489546557,
  textInvoice: true,
  email: "abc@gmail.com",
  defaultPaymentMethod: "card",
};
console.log(customer)
