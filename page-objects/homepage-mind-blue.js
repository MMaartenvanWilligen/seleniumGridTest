/**
 * Created by maarten on 15-11-16.
 */

var Page = require("./page");


function HomepageMindblue() {
    page.call(this, "http://mind-platform.maarten.choffice.nl/");
    this.HomepageUrl  = "http://mind-platform.maarten.choffice.nl/";
    this.logoAnchor = ".header .logo";
    this.logoImage = ".header .logo img";
    this.titleText = "titel test";

}

/**
* subclass Homepage extends page
* */

HomepageMindblue.prototype = Object.create(Page.prototype);
HomepageMindblue.prototype.constructor = HomepageMindblue;

HomepageMindblue.prototype.getAllAnchors = function () {
    return browser.elements("a").then(function (res, err) {
        console.log();
        return res
    })
};

module.exports = HomepageMindblue;
