var contactPage = require('./pages/contact');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		contactPage.get();
	});

	it('should have "Get in touch" and "Address" sections on Contact Us page', function (){
		expect(contactPage.getSectionsPage('Get in Touch') && contactPage.getSectionsPage('Address')).toBe(true);
	});


});
