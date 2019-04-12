var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.load();

	});

	it('hould have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		var expectedHeader = 'Example Headline 2';
		homePage.nextButton();
		var header2 = homePage.getHeader2();
		homePage.waitForResponse(header2);
		expect(header2.getText()).toEqual(expectedHeader);
	});
	
	it('should display drop down after clicking on About menu item', function(){
		homePage.clickMenuAtIdx(1);
		var menu = homePage.getDropdown();
		homePage.waitForResponse(menu);
		expect(menu.isDisplayed()).toBe(true);

		
	});

});
