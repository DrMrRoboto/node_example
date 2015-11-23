var bank = {};

bank.random = function(min, max){
	return Math.random() * (max - min) + min;
};

module.exports = bank; 