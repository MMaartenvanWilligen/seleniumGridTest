/**
 * Created by maarten on 03-11-16.
 */


 /*var assert = require("assert");

 describe("my webdriverio tests", function(){
 it("Google test",function() {
 return browser.url("https://www.google.com").then(function () {
 return browser.getTitle().then(function () {
 console.log("Title was: " + title);
 return assert(title === "Google");
 });
 });
 });
 });*/

var assert = require('assert');
describe('my webdriverio tests', function(){
    it('Github test', function() {
        browser.url('http://mind-platform.maarten.choffice.nl/');
        console.log('browser loaded?');
        browser.timeouts("page load",30000);
        const title = browser.getTitle();
        console.log('Title was:'  + title);
        assert(title === 'titel test');
    });
});