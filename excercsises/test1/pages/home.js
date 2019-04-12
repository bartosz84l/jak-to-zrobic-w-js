var Page = require('./page.js');

class HomePage extends Page {

  menuItems(){
    return element.all(by.css('ul.nav > li > a')); 
  }

  waitForResponse(text){
    super.waitForResponse(text, 15000);
  };
  
  load (){
     super.load('/index.html');
  }


  clickMenuAtIdx (idx) {
    this.menuItems().get(idx).click();
  };

  getMenuTextAtIdx (idx) {
    return this.menuItems().get(idx);
  };

  getDropdown (){
    return element(by.css('.dropdown-menu'));
  };

  nextButton (){
    return element(by.css('a.right')).click();
  }
  
  getHeader2() {
    return element(by.xpath("//h1[contains(text(), 'Example headline 2')]"));
  };
  
};

module.exports = new HomePage();