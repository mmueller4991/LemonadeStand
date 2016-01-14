"use strict";



function getShoppingList(message) {
  var groceryItem;
groceryItem = window.prompt(message);
console.log(groceryItem);
return groceryItem;
}

function getRandomTemp() {
    var randFCST;
    randFCST = 50 + Math.floor(Math.random()*50);
    return randFCST;
}

function getRandomDewPoint() {
    var randDew;
    randDew = 40 + Math.floor(Math.random()*30);
    console.log(randDew);
	if (randDew >= 60) { 
		console.log("It's going to be a muggy day today!  Good selling!");
		} else {
		console.log("The dew point is low today. It's a perfect day for selling!");
	}
	return randDew;
}
function get5DayForecast(today, randDew, getRandomTemp) {


}


function getToday() {

}

	var today = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
function calcItemDailyCost(cost, countItems) {
	var marketCost = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	for (var i=0; i<marketCost.length-1; i++) {
		var costFactor;
		costFactor = Math.random();
	}
	var itemDayCost;
	var itemTotCost;
	var itemBaseCost;
	itemBaseCost = 2;
	itemDayCost = itemBaseCost * (1 + costFactor);
	cost = itemDayCost;
	var itemTotalCost;
	itemTotalCost = Math.round(cost * countItems);
	console.log("Total costs for today will be about $" +itemTotalCost);
	return itemTotalCost;
}
console.log("message2");

function purchaseLemonade(temp, dewPoint, unitPrice) {
	var lemonadeSales;
	var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
		if (temp > 50 && dewPoint > 50) {
	lemonadeSales = unitPrice;
	return lemonadeSales;
		} else {
	console.log("don't buy");
		}
}

function main() {
	var userName;
	var nameMessage;
	var cupMessage;
    var lemonMessage; //pull in price of lemons
    var priceMessage;
    var sugarMessage; //pull in price of sugar
    var iceMessage; 
    var cupCount;
    var cupCost;
    var lemonBaseCost;
    lemonBaseCost = 2;
    var lemonCount;
    var lemonDailyCost;
    var unitPrice;
    var sugarCount;
    var iceCount;
    var totalDailyRevenue;
    var totalDailyCostsMessage;
    console.log("In the Main function");
	while (userName != "stop") {
		nameMessage = "Please enter your name, enter \"stop\" to end the game";
    	userName = getShoppingList(nameMessage);
		if (userName === "stop") {
		continue
	}
	
	var randDew
	console.log("Dew Point =", getRandomDewPoint());
	console.log("Temperature = " +getRandomTemp()+ " degrees.");
    cupMessage = "Please enter number of cups to buy:";
    cupCount = getShoppingList(cupMessage);
    lemonMessage = "Please enter number of lemons to buy:";
    lemonCount = getShoppingList(lemonMessage);
    console.log(lemonCount);
    priceMessage = "Enter your unit price for today ($0.25 - $1.00).";
    unitPrice = getShoppingList(priceMessage);
    lemonDailyCost = calcItemDailyCost(lemonBaseCost, lemonCount);
    totalDailyRevenue = purchaseLemonade(getRandomTemp(), getRandomDewPoint(), unitPrice);
    console.log(totalDailyRevenue);
    //otPay = calcOtPay(userRate, userHours);
    //totalPay = addtwo(basePay, otPay);
    //payMessage = assembleMessage(userName, userHours, totalPay);
	//console.log(payMessage);
	}
}

main()