/**
 * Created by maarten on 03-11-16.
 */



/*
 * @desc declare variables
 * */

//libaries and frameworks
var assert = require("assert");
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe('Home page', function () {
    it("should open google", function () {
        return browser.url("https://www.google.com/");
    });

});
