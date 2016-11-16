/**
 * Created by maarten on 03-11-16.
 */

// /**
//  * required libaries
//  * */
//
// var assert = require('assert');
// var chai = require('chai')
//     , expect = chai.expect
//     , should = chai.should();
//
// // var HomepageMindBlue = require("../page-objects/homepage-mind-blue");
// // var homepage;
//
// describe('title test', function () {
//
//     //hook run before tests
//     before(function () {
//         homepage = new HomepageMindBlue();
//         return homepage.goToPage();
//     });
//
//     it("url should be 'http://mind-platform.maarten.choffice.nl/'", function () {
//         return homepage.currentUrl().then(function (url) {
//             return assert(url === homepage.HomepageUrl);
//         })
//     });
//
//     it("Title should be 'titel test'", function () {
//         const title = browser.getTitle();
//         console.log('Title was:' + title);
//         return assert(title === homepage.titleText);
//     });
// });


var assert = require('assert');
describe('my webdriverio tests', function(){
    it('Github test', function() {
        browser.url('https://mindblue.nl/');
        console.log('browser loaded?');
        const title = browser.getTitle();
        console.log('Title was:'  + title);
        browser.saveScreenshot('./webdrivercss.png');
        assert(title === 'titel test');
    });
});