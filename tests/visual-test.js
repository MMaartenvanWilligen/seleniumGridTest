var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
var webdrivercss = require('webdrivercss');
var gm = require('gm');
var resemble = require("node-resemble-js");
var Promise = require("bluebird");
var fs = require('fs');


var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
var homepage;

describe('screenshot compare', function () {

    var resultCompare = {};

    //hook run before tests
    before(function () {
        homepage = new HomepageMindBlue();
        webdrivercss.init(browser);
        return homepage.goToPage();
    });

    describe('compare data should not be empty', function () {

        it("should initzialize webdrivercss", function () {
            return webdrivercss.init(browser, {
                screenshotRoot: 'tests/screenshots/baseline',
                failedComparisonRoot: 'tests/screenshots/diffs',
                screenWidth: [1024]
            });
        });

        it('should take screenshots with webdrivercss', function () {
            return browser
                .webdrivercss('comparisonTest', {
                    name: 'logo',
                    elem: homepage.logoImageDesktop
                });
        });

    });

    describe('comapare baseline screenshot with regression screenshot', function () {

        before(function () {

            resemble.outputSettings({
                errorColor: {
                    red: 255,
                    green: 255,
                    blue: 0
                },
                errorType: 'movementDifferenceIntensity',
                transparency: 0.3
            });

            return getDataOfComparisonScreenshots();
        });

        it("expect data of comparison not to be empty", function () {
            expect(resultCompare).not.to.be.empty;
        });

        it('expect screenshots to be same dimension ', function () {
            expect(resultCompare.isSameDimensions).to.be.true
        });

        function getDataOfComparisonScreenshots() {
            return new Promise(function (resolve, reject) {
                resemble('tests/screenshots/baseline/' + file)
                    .compareTo('tests/screenshots/regression' + file2)
                    .ignoreColors()
                    .onComplete(function (data) {
                        console.log("data" + " " + data.misMatchPercentage);
                        resolve(data);
                    });
            }).then(function (data) {
                // misMatchPercentage : 100, // %
                // isSameDimensions: true, // or false
                // dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
                // getImageDataUrl: function(){}
                // console.log("data in then" + " " + data.misMatchPercentage);
                resultCompare = data;
                return getDiffImage(data);
            })
        }

        function getDiffImage(data) {
            return new Promise(function (resolve, reject) {
                resolve(data.getDiffImage().pack().pipe(fs.createWriteStream('tests/screenshots/diff/' + diff)));
            }).then(function (res) {
                console.log(res);
            });
        }


    });

});





