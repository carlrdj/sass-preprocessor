var page = require('page');
var title = require('title');
var empty = require('empty');
var template = require('./template');

page('/', function (ctx, next) {
	title('Usuarios');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template);
})


