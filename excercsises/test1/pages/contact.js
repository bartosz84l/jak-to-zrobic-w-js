var Page = require('./page.js');

class ContactPage extends Page {

    load(){
      super.load('/contact.html');
    };

    waitForResponse (text){
      super.waitForResponse(text, 15000);
    };

    menuItems (){
      return element.all(by.css('ul.nav > li > a'));
    };


    clickMenuItemAt (idx){
      this.menuItems().get(idx).click();
    };

    getName () {
      return element(by.css('#name'));
    };

    sendName (name){
      this.getName().sendKeys(name)
    };

    getEmail(){
      return element(by.css('#email'))
    };

    sendEmail(email) {
      this.getEmail().sendKeys(email)
    };

    getMessage (){
      return element(by.css('#content'))
    };

    sendMsg(msg){
      this.getMessage().sendKeys(msg)
    };


    clickSubmit(){
      element(by.css('button[type = "submit"]')).click();
    };


    findMessageBy(text, tagName = '*') {
        return element(by.xpath("//h3[contains(text(), 'Your message has been sent.')]"));
    };

}


module.exports = new ContactPage();
