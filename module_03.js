var account = {};
var num = require('./module_01.js');
var money = require('./module_02.js');

var finalMoney = money.toUSD(num.random(100, 1000000));

account.balance = function(){
	return "Account balance: \n" + finalMoney;
} 

module.exports = account;


