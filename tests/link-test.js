/**
 * Created by maarten on 11-11-16.
 */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");


describe("test anchor tag", function () {

    var homepage;

    before(function () {
        homepage = new HomepageMindBlue();
        return homepage.goToPage();
    });

    describe("A: Promised Array, no timeout - Works", function () {
        homepage.getAllAnchors().then(function (res) {
            res.value.forEach(function (value) {
                console.log("value:" + value);
                it("foreach", function () {
                    console.log("value:" + value);
                    assert.ok(value.value);
                })
            })
        });
    })


    .elements('a', function(err, res){
        // iterate through elements
        res.value.forEach(function(elem) {
            // execute specific action
            runner.elementIdClick(elem.Element, function(err, res) {
                // callback logic here
                // ...
            })
        })
    });
    // it("anchors href should not be empty", function () {
    //     return browser.elements("a").then(function (res) {
    //         for (var i = 0; res.value[0].length; i++) {
    //             console.log("i:" + res.value[0][i]);
    //             var result = res.value[0][i];
    //             result.should.have.length(3);
    //         }
    //     })
    // });
});




