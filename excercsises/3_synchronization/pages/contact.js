var ContactPage = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 

  this.get = function() {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickMenuItemAt = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.getName = function(){
    return element(by.css('#name'))
  };

  this.sendName = function (name) {
    this.getName().sendKeys(name)
  };

  this.getEmail = function () {
    return element(by.css('#email'))
  };

  this.sendEmail = function (email) {
    this.getEmail().sendKeys(email)
  };

  this.getMessage = function () {
    return element(by.css('#content'))
  };

  this.sendMsg = function(msg){
    this.getMessage().sendKeys(msg)
  };


  this.clickSubmit = function(){
      element(by.css('button[type = "submit"]')).click();
  };


  this.findMessageBy = function () {
    return element(by.xpath("//h3[contains(text(), 'Your message has been sent.')]"));

};

};

module.exports = new ContactPage();
