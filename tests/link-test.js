/**
 * Created by maarten on 11-11-16.
 */

var assert = require('assert');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var HomepageMindBlue = require("./page-objects/homepage-mind-blue");
// var arrayAchor = [];


var homepage;
homepage = new HomepageMindBlue();
init();

function init() {

    homepage.getAllAnchors().then(function (res) {
        res.forEach(function (value) {
            test(value)
        })
    })

}

function test() {
    describe("test links", function () {

        before(function () {

            return homepage.goToPage();
        });

        it("get all anchors", function () {
            return homepage.getAllAnchors().then(function (res) {
                console.log("res anchors" + res.value);
                console.log("res anchors count" + res.value.length);
                return expect(res.value).not.to.be.empty;
            })
        });

        it("get all anchors alt attribute", function () {
            return homepage.getAllAnchorsAlt().then(function (res) {
                console.log("res anchors alt" + res);
                console.log("res anchors alt count" + res.length);
                res.forEach(function (value) {
                    alt.push(value);
                });
                console.log("alt array" + alt);
                console.log("alt array length" + alt.length);
                return expect(res).not.to.be.empty;
            })
        });


    });
}


// it('links should have href', function (done) {
//     describe('Testing elements', function () {
//         .
//         forEach(function (res) {
//             it('testing' + res, function (done) {
//                 console.log(res);
//                 expect(res).to.be.a('number');
//                 done();
//             });
//         });
//     });
//     done();
// });

// it("anchors href should not be empty", function () {
//     return browser.elements("a").then(function (res) {
//         for (var i = 0; res.value[0].length; i++) {
//             console.log("i:" + res.value[0][i]);
//             var result = res.value[0][i];
//             result.should.have.length(3);
//         }
//     })
// });

