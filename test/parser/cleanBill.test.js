/*jshint esversion: 6*/

var assert = require('chai').assert;
var expect = require('chai').expect;
var cleanBill = require("../../lib/parser/cleanBill.js");
var getBill = require("../../lib/scraper/getBill.js");

describe('cleanBill', function() {
  it('should throw an error if bill is not an object', function() {
    expect(() => {
      cleanBill(1, (res) => {});
    }).to.throw(TypeError);
  });

  it('should throw an error if there is no callback', function() {
    expect(() => {
      cleanBill({});
    }).to.throw(TypeError);
  });

  it('should return an object if the bill is valid', function(){
    getBill("BILLS-115hr1001ih", (res) => {
      cleanBill(res, function(cleanedRes){
        expect(cleanedRes).to.be.an("object").that.is.not.empty;
      });
    });
  });
});