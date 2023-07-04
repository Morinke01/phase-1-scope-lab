//declaring customer name
var customerName = 'bob';
var bestCustomer;
function customerName() {
    return customerName;
}
customerName();

//function to return customer name in uppercase
function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}
upperCaseCustomerName();

//function for best customer not bob
function setBestCustomer() {
   
    return bestCustomer = 'not bob';
  }
setBestCustomer();

//overwrite best customer
function overwriteBestCustomer(){ 
     bestCustomer = 'maybe bob';
    return bestCustomer;
}
overwriteBestCustomer();

//unsuccessfully try to reassign the least favorite customer

function changeLeastFavoriteCustomer(){
    const leastFavoriteCustomer = 'Morty';
    leastFavoriteCustomer = 'Assignment to constant variable.';
    return leastFavoriteCustomer;
}
changeLeastFavoriteCustomer();
