var page = require('page');
var title = require('title');
var template = require('./template');
var header = require('./header');


page('/order', header, function (ctx, next) {
	title('Login');
	var main = $('#main-container');
	main.empty().append(template);
})

