/**
 * Created by maarten on 03-11-16.
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

describe('title test', function () {

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    it("url should be https://mindblue.nl/", function () {
        return homepage.currentUrl().then(function (url) {
            return assert(url === homepage.homepageUrl);
        })
    });

    it("Title should be 'MINDblue'", function () {
        return browser.getTitle().then(function (title) {
            return assert(title === homepage.titleText);
        });
    });
});

