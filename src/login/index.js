var page = require('page');
var title = require('title');
var template = require('./template');


page('/', function (ctx, next) {
	title('Login');
	var main = $('#main-container');
	main.empty().append(template);
})

