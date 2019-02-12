var expect = require('chai').expect;
var assert = require('assert');
var fizzbuzz = require('../fizzbuzz');

describe('isFizz',function () {
    it('WhenNumberIsThreeThenReturnTrue',function() {
        expect(isFizz(3)).to.equal(true);
    });
    it('WhenNumberIsfiveThenReturnFalse',function() {
        expect(isFizz(5)).to.equal(false);
    });
});

describe('isBuzz',function () {
    it('WhenNumberIsFiveThenReturnTrue',function() {
        expect(isBuzz(5)).to.equal(true);
    });
    it('WhenNumberIsSixThenReturnFalse',function() {
        expect(isBuzz(6)).to.equal(false);
    });
});

describe('isFizzBuzz',function () {
    it('WhenNumberIsFifteenThenReturnTrue',function() {
        expect(isFizzBuzz(15)).to.equal(true);
    });
    it('WhenNumberIsSevenThenReturnFalse',function() {
        expect(isFizzBuzz(7)).to.equal(false);
    });
});

/*describe('createSequence',function () {
    it('createCorrectSequenceToNumberOne',function() {
        expect(fizzbuzz(1)).to.equal("1");
    });
});*/