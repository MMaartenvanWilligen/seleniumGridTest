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

    it('should save a screenshot of the browser view', function () {
        // receive screenshot as Buffer
        var screenshot = browser.saveScreenshot(); // returns base64 string buffer
        fs.writeFileSync('./myShort.png', screenshot);

        // save screenshot to file and receive as Buffer
        screenshot = browser.saveScreenshot('./snapshot.png');

        // save screenshot to file
        browser.saveScreenshot('./snapshot.png');
    });

});
