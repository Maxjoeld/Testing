/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

describe('project-2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      const { getBiggest } = funcs;
      assert.typeOf(getBiggest, 'function');
    });
    it('should be a number', () => {
      const { getBiggest } = funcs;
      const cb = getBiggest(5, 5);
      assert.typeOf(cb, 'number');
    });
  });
  describe('`greeting`', () => {
    const greeting = funcs.greeting;
    it('should be a function', () => {
      assert.typeOf(greeting, 'function');
    });
    it('should return a string - Guten Tag!', () => {
      const result = greeting('German');
      assert.equal(result, 'Guten Tag!');
    });
    it('should return a string - Hello!', () => {
      const result = greeting('English');
      assert.equal(result, 'Hello!');
    });
  });
  describe('`isTenOrFive`', () => {
    const isTenOrFive = funcs.isTenOrFive;
    it('should be a function', () => {
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return true', () => {
      const result = isTenOrFive(10);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const result = isTenOrFive(4);
      assert.equal(result, false);
    });
  });
  describe('`isInRange`', () => {
    const isInRange = funcs.isInRange;
    it('should be a function', () => {
      assert.typeOf(isInRange, 'function');
    });
    it('should return true', () => {
      const result = isInRange(22);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const result = isInRange(52);
      assert.equal(result, false);
    });
  });
  describe('`isInteger`', () => {
    const isInteger = funcs.isInteger;
    it('should be a function', () => {
      assert.typeOf(isInteger, 'function');
    });
    it('should return true', () => {
      const result = isInteger(157);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const result = isInteger(23.7);
      assert.equal(result, false);
    });
  });
  describe('`fizzBuzz`', () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should be a function', () => {
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return fizzbuzz', () => {
      const result = fizzBuzz(15);
      assert.equal(result, 'fizzbuzz');
    });
    it('should return buzz', () => {
      const result = fizzBuzz(25);
      assert.equal(result, 'buzz');
    });
    it('should return fizz', () => {
      const result = fizzBuzz(9);
      assert.equal(result, 'fizz');
    });
    it('should return a number', () => {
      const result = fizzBuzz(11);
      assert.equal(result, 11);
    });
  });
  describe('`isPrime`', () => {
    const isPrime = funcs.isPrime;
    it('should be a function', () => {
      assert.typeOf(isPrime, 'function');
    });
    it('should be number true', () => {
      const result = isPrime(7);
      assert.equal(result, true);
    });
    it('should be number false', () => {
      const result = isPrime(6);
      assert.equal(result, false);
    });
    it('should be number false', () => {
      const result = isPrime(-1);
      assert.equal(result, false);
    });
  });
});
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
