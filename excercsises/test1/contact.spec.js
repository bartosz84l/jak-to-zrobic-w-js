var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function(){
		contactPage.load();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function(){
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	it('should display text "Your message has been sent." when user sends message  ', function(){
		contactPage.sendName('Bartek');
		contactPage.sendEmail('cos@gmail.con');
		contactPage.sendMsg('hello');
		contactPage.clickSubmit();
		var message = contactPage.findMessageBy();
		contactPage.waitForResponse(message);
		expect(message.isDisplayed()).toBe(true);
		
		
		

	});

});
