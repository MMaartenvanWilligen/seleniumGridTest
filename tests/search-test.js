/**
 * Created by maarten on 22-11-16.
 */

/**
 * @global 'browser' is wdio global. The driver for browser automation
 * @desc required libaries
 * */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe("search", function () {

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    it("should exist", function () {
        return browser.element("input[name='q']").then(function (elem) {
            console.log("elem" + " " + elem);
            return should.exist(elem, elem + "should exist");
        });
    });

    it("should have placeholder", function () {
        return browser.getAttribute(homepage.searchInput, "placeholder").then(function (attrs) {
            console.log("placeholder" + " " + attrs);
            return attrs.should.be.length.above(1);
        })
    });

    it("should have data-placeholder-small", function () {
        return browser.getAttribute(homepage.searchInput, "data-placeholder-small").then(function (attrs) {
            console.log("data-placeholder-small" + " " + attrs);
            return attrs.should.be.length.above(2);
        })
    });

    it("should have data-placeholder-small text 'Waar kunnen wij je mee helpen ?' ", function () {
        return browser.getAttribute(homepage.searchInput, "data-placeholder-small").then(function (attrs) {
            console.log("data-placeholder-small" + " " + attrs);
            return assert(attrs === homepage.searchInputText);
        })
    });

});







