"use strict";

function getShoppingList(message) {
  var groceryItem;
	groceryItem = window.prompt(message);
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
	if (randDew >= 60) { 
		console.log("It's going to be a muggy day today!  Good selling!");
		} else {
		console.log("The dew point is low today. It's a perfect day for selling!");
	}
	return randDew;
}
function get5DayForecast() {
	var randDew;
	var randTemp;
	var dewToday;
	var dailyTemp;
	var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	for (var i=0; i<days.length; i++) {
			randDew = 40 + Math.floor(Math.random()*30);
			var dailyDew = [randDew, randDew, randDew, randDew, randDew];
			randTemp = 50 + Math.floor(Math.random()*50);
			var dailyTemp = [randTemp, randTemp, randTemp, randTemp, randTemp];
			console.log("Forecast for", days[i], ":", "Temp =", dailyTemp[i], "Dew Point =", dailyDew[i]);
		}	
	}

function getToday() {
	var today = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	for (var index=0; index<today.length; index++) {
		if(today[index] === "Monday") {
		console.log("Today is Monday.  Welcome to the Working Week!");
		return today[index];
		console.log(index);
		}else{
	}   	if(today[index] === "Tuesday") {
		return today[index];
	}
}
}
	
function calcItemDailyCost(cost, countItems, unitPrice) {
	var marketCost = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	for (var i=0; i<marketCost.length; i++) {
		var costFactor;
		costFactor = Math.random();
	}
	var unitPrice;
	var itemDayCost;
	var itemTotCost;
	var itemBaseCost;
	var breakEvenUnits;
	itemBaseCost = 2;
	itemDayCost = itemBaseCost * (1 + costFactor);
	cost = itemDayCost;
	var itemTotalCost;
	itemTotalCost = Math.round(cost * countItems);
	breakEvenUnits = Math.round(itemTotalCost/unitPrice);
	console.log("Total costs for today will be about $" +itemTotalCost+ ".");
	console.log("You will need to sell " +breakEvenUnits+ " cups to break even!");
	return itemTotalCost;
}

function main() {
	var days;
	var nameMessage;
	var cupMessage;
    var lemonMessage;
    var priceMessage; 
    var cupCount;
    var lemonBaseCost;
    lemonBaseCost = 1;
    var lemonCount;
    var lemonDailyCost;
    var unitPrice;
    var totalDailyCostsMessage;
    var Today;
    var FCST;
    var i;
    i = 1;
    Today = getToday();
    FCST = (get5DayForecast());
    console.log(Today);
    days=window.prompt("Enter the number of days to simulate:");
	while (days>0) {
		var dailyTemp;
		var randDew;
		var randFCST;
		var lemonadeSales;
		alert("Today is day " + i + '. Press OK to continue.');
	    cupMessage = "Please enter number of cups to buy:";
	    cupCount = getShoppingList(cupMessage);
	    lemonMessage = "Please enter number of lemonade servings to buy:";
	    lemonCount = getShoppingList(lemonMessage);
	    console.log(cupCount, "cups purchased.")
	    console.log(lemonCount, "lemonade servings purchased.");
	    priceMessage = "Enter your unit sales price for today ($0.25 - $1.00).";
	    unitPrice = getShoppingList(priceMessage);
	    //console.log(purchaseLemonade());
	    lemonDailyCost = calcItemDailyCost(lemonBaseCost, lemonCount, unitPrice);
	    //console.log(lemonadeSales);
	    //console.log(totalDailyRevenue);
	    days--;
	    i++;
	}
}

main();