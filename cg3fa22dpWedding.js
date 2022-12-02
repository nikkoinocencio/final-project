var guestNumber = prompt("How many guests do you have?");
var tableNumber = prompt("How many tables do you want?");
var split = Math.floor(guestNumber/tableNumber);
var splitAdd = guestNumber % tableNumber ;
var splitTables = tableNumber - 1;
var splitTotal = splitAdd + split;
alert ("Your " + guestNumber + " will be seated as follows: " + splitTables + " table(s) of " + split + ", and 1 table of " + splitTotal + ".");