/**
 * Created by maarten on 15-11-16.
 */

var Page = require("./page");

/**
* @desc constructor HomepageMindBlue
* initzialize dom elements selectors
* */

function HomepageMindBlue() {
    Page.call(this, "https://mindblue.nl/");
    this.homepageUrl = "https://mindblue.nl/";
    this.logoAnchor = ".header .logo";
    this.logoImage = ".header .logo img";
    this.logoImageDesktop = ".header .logo .desktop";
    this.logoImageMobile = ".header .logo .mobile";
    this.titleText = "MINDblue";
    this.cardImages = ".card-content .image-wrapper .image";
    this.searchInput = "input[name='q']";
    this.searchInputText = "Waar kunnen wij je mee helpen ?";

}

/**
 * subclass Homepage extends page
 * */

HomepageMindBlue.prototype = Object.create(Page.prototype);
HomepageMindBlue.prototype.constructor = HomepageMindBlue;

module.exports = HomepageMindBlue;