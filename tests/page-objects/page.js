/**
 * Created by maarten on 15-11-16.
 */

/**
 * @desc constructor Page
 * set url
 * @param pageUrl
 * */

function Page(pageUrl) {
    this.pageUrl = pageUrl;
}

/**
 * @desc method
 * @return url
 * @global 'browser' is wdio global. driver for browser automation
 * */

Page.prototype.goToPage = function () {
    return browser.url(this.pageUrl);
};

/**
 * @desc method get current url in browser
 * @return url
 * @global 'browser' is wdio global driver for browser automation
 * */

Page.prototype.currentUrl = function () {
    return browser.getUrl().then(function (url) {
        console.log("current url:" + " " + url);
        return url;
    });
};

module.exports = Page;