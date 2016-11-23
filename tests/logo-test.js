/**
 * Created by maarten on 22-11-16.
 */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe("Logo", function () {

    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    /**
     * only desktop image
     * Using 'length above' assertion instead of 'exist' because it has a better error message
     * */

    it("desktop image should have alt attribute", function () {
        return browser.getAttribute(homepage.logoImageDesktop, "alt").then(function (attrs) {
            console.log("logo alt" + " " + attrs);
            return attrs.should.be.length.above(2);
        })
    });

    /**
     * only mobile image
     * using 'length above' assertion because it has a better error message
     * */

    it("mobile image should have alt attribute", function () {
        return browser.getAttribute(homepage.logoImageMobile, "alt").then(function (attrs) {
            console.log("logo alt" + " " + attrs);
            return attrs.should.be.length.above(2);
        })
    });

    it("image should have alt attribute text 'MIND logo'", function () {
        return browser.getAttribute(homepage.logoImage, "alt").then(function (attrs) {
            console.log("logo alt" + " " + attrs);
            return expect(attrs).to.deep.equal(["MIND logo" , "MIND logo"]);
        })
    });

});

