/**
 * Created by maarten on 03-11-16.
 */

var assert = require('assert');
describe('my webdriverio tests', function(){
    it('Github test', function() {
        browser.url('http://mind-platform.maarten.choffice.nl/');
        console.log('browser loaded?');
        browser.timeouts("page load",30000);
        browser.screenshot();
        const title = browser.getTitle();
        console.log('Title was:'  + title);
        assert(title === 'titel test');
    });
});
