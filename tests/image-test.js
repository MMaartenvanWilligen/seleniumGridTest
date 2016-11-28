/**
 * Created by maarten on 22-11-16.
 */

/**
 * testing for aria attributes is optional. There is no evidence aria attributes are indexed by search engines.
 * However, it is good for the accessibility of the website.
 *
 * */

/**
 * @desc required libaries
 * */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe("homepage", function () {

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    describe("card images", function () {

        it("array of role attributes should be iterable", function () {
            return browser.getAttribute(homepage.cardImages, "role").then(function (attrs) {
                attrs.forEach(function (role) {
                    console.log("role" + "  " + role);
                    roleTest(role);
                });
                return attrs.should.be.iterable;
            });
        });

        function roleTest(attrs) {
            describe("role" + " " + attrs, function () {
                it("should exist", function () {
                    return should.exist(attrs, "role attribute does not exist");
                });
            });
        }

    });

    describe("card images", function () {

        it("array of aria-labels attributes should be iterable", function () {
            return browser.getAttribute(homepage.cardImages, "aria-label").then(function (attrs) {
                attrs.forEach(function (ariaLabel) {
                    console.log("aria label" + "  " + ariaLabel);
                    ariaLabelTest(ariaLabel);
                });
                return attrs.should.be.iterable;
            });
        });

        function ariaLabelTest(attrs) {
            describe("aria-label: "  + " " + attrs, function () {
                it("should exist", function () {
                    return should.exist(attrs, "aria-label attribute does not exist");
                });
            });
        }

    });

});

