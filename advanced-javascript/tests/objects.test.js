const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/arrays');

const { expect } = chai;
chai.use(sinonChai);
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('objects', () => {
  describe('`keys`', () => {
    it('should be a function', () => {
      const { keys } = funcs;
      expect(keys).to.be.an('function');
    });
    it('should return key1', () => {
      const { keys } = funcs;
      const result = keys({ key1: 'one', key2: 'two' });
      expect(result[0]).to.equal('key1');
    });
  });
  describe('`values`', () => {
    it('should be an object', () => {
      const { values } = funcs;
      expect(values).to.be.an('function');
    });
    it('should return one', () => {
      const { values } = funcs;
      const result = values({ key1: 'one', key2: 'two' });
      expect(result[0]).to.equal('one');
    });
  });
  describe('`mapObject`', () => {
    it('should be a function', () => {
      const { mapObject } = funcs;
      expect(mapObject).to.be.an('function');
    });
    it('should return two', () => {
      const { mapObject } = funcs;
      const result = mapObject({ key1: 'one', key2: 'two' }, (value) => {
        return value;
      });
      expect(result.key2.to.equal('two'));
    });
  });
});
