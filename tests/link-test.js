/**
 * Created by maarten on 11-11-16.
 */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("/tests/page-objects/homepage-mind-blue");
var homepage;

describe("test anchor tag", function () {

    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });


    it("sfs", function () {
        browser.getAttribute('a', 'href').then(function (attrs) {
            console.log(attrs); // array of all href urls of all links on the page
        });
        return browser.url('http://mind-platform.maarten.choffice.nl/');

    });


    it("anchors href should not be empty", function () {
        return browser.elements("a").then(function (res) {
            for (var i = 0; res.value[0].length; i++) {
                console.log(res.value[0][i]);
                var result = res.value[0][i];
                result.should.have.length(3);
            }
        })
    });
});
