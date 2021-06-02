var HomePage = require('./pageobjects/home.page');

describe('test1', function () {
	this.timeout(20000);
  
	it('launch the app',function() {
		return HomePage.run();
	});
	
	it('quit the app',function () {
		return HomePage.quit();
	});
});