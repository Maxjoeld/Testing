/* eslint-disable prefer-destructuring */

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/arrays');

const expect = chai.expect;
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.
// hint 3. - if the function you're testing requires a * callback *, make sure you use a spy like sinon

describe('Arrays', () => {
  describe('`each`', () => {
    it('should be a function', () => {
      const { each } = funcs;
      expect(each).to.be.a('function');
    });
    it(' should call should equal 2', () => {
      const { each } = funcs;
      const spyCallBack = sinon.spy();
      each([4, 5, 6], spyCallBack);
      expect(spyCallBack).to.have.callCount(3);
    });
    it('should return a correct result', () => {
      const { map } = funcs;
      const spyCallBack = sinon.spy(x => x * 2);
      const result = map([1, 2, 3, 4], spyCallBack);
      expect(result[2]).to.equal(6);
      expect(result[0]).to.equal(2);
    });
    // begin here
  });

  describe('`map`', () => {
    it('should be a function', () => {
      const map = funcs.map;
      expect(map).to.be.an('function');
    });
    it('should return a correct result', () => {
      const { map } = funcs;
      const spyCallBack = sinon.spy(x => x * 2);
      const result = map([1, 2, 3, 4], spyCallBack);
      expect(result[2]).to.equal(6);
      expect(result[0]).to.equal(2);
    });
  });

  describe('`reduce`', () => {
    it('should be a function', () => {
      const reduce = funcs.reduce;
      expect(reduce).to.be.a('function');
    });
    it('should return number 15', () => {
      const spyCallBack = sinon.spy((memo, item) => memo + item);
      const { reduce } = funcs;
      const result = reduce([4, 5, 6], spyCallBack, 0);
      expect(result).to.equal(15);
    });
  });

  describe('`find`', () => {
    it('should be a function', () => {
      const find = funcs.find;
      expect(find).to.be.an('function');
    });
    it('should return 4', () => {
      const { find } = funcs;
      const spyCallBack = sinon.spy(x => x > 3);
      const result = find([2, 3, 4], spyCallBack);
      expect(result).to.equal(4);
    });
  });

  describe('`filter`', () => {
    it('should be a function', () => {
      const filter = funcs.filter;
      expect(filter).to.be.a('function');
    });
  });

  describe('`flatten`', () => {
    it('should be a function', () => {
      const flatten = funcs.flatten;
      expect(flatten).to.be.a('function');
    });
    it('should return the length of [1, 2, 3, 4]', () => {
      const { flatten } = funcs;
      const spyCallBack = sinon.spy();
      const result = flatten([1, [2, 3], 4]);
      console.log(result);
      expect(result.length).to.equal(4);
    });
  });
});
