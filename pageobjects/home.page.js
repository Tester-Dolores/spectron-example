var page = require('./page');
var Application = require('spectron').Application;
var exepath = 'exe路径'; //替换成你的exe路径

var homePage = {
	quit: function() { if (this.app && this.app.isRunning()) {
		return this.app.stop();
	}},
	
	run: function() {
		this.app = new Application({
		    path:exepath,
		    connectionRetryCount:1,
		    chromeDriverLogPath:'./chromeDriverLog.txt'
		});
		return this.app.start();
	}
};
module.exports = homePage;
