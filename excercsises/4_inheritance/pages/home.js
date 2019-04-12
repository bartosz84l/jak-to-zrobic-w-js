var Page = require('./page');

var HomePage = function() {

  /**
   * Call super constructor.
   */
  Page.call(this);

  /**
   * Self reference.
   */
  var self = this;

  this.menuItems = element.all(by.css('ul.nav > li > a')); 


  this.clickMenuAtIdx = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function(idx) {
    return this.menuItems.get(idx);
  };
  
};

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();
