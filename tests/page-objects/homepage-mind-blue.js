/**
 * Created by maarten on 15-11-16.
 */

var Page = require("./page");


function HomepageMindBlue() {
    Page.call(this, "https://mindblue.nl/");
    this.homepageUrl  = "https://mindblue.nl/";
    this.logoAnchor = ".header .logo";
    this.logoImage = ".header .logo img";
    this.titleText = "MINDblue";

}

/**
* subclass Homepage extends page
* */

HomepageMindBlue.prototype = Object.create(Page.prototype);
HomepageMindBlue.prototype.constructor = HomepageMindBlue;

/**
 * methods homepageMind
 * */

HomepageMindBlue.prototype.getAllAnchors = function () {
    return browser.elements("a").then(function (res) {
        return res
    })
};

module.exports = HomepageMindBlue;