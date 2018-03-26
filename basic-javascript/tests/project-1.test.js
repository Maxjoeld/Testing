/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const { multiplyByTen } = funcs;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should return a number multiplied by 10', () => {
      const { multiplyByTen } = funcs;
      const thirty = multiplyByTen(3);
      assert.typeOf(thirty, 'number');
      assert.equal(thirty, 30);
    });
    it('should return an array that are factors of 10', () => {
      const { multiplyByTen } = funcs;
      const tests = [5, 19, 34, 1000];
      const factors = [50, 190, 340, 10000];
      tests.forEach((each, i) => {
        const result = multiplyByTen(each);
        assert.equal(result, factors[i]);
      });
    });
  });
});

describe('`subtractFive`', () => {
  it('should be a function', () => {
    const subtractFive = funcs.subtractFive;
    assert.typeOf(subtractFive, 'function');
  });
  it('should be a Number', () => {
    const { subtractFive } = funcs;
    const number = subtractFive(5);
    assert.typeOf(number, 'number');
  });
  it('should equal 5', () => {
    const { subtractFive } = funcs;
    const diff = subtractFive(10);
    assert.equal(diff, 5);
  });
});

describe('`areSameLength`', () => {
  it('should be a function', () => {
    const areSameLength = funcs.areSameLength;
    assert.typeOf(areSameLength, 'function');
  });
  it('should have the same length', () => {
    const { areSameLength } = funcs;
    const length = areSameLength('Mark', 'Cube');
    assert.equal(length, true);
  });
  it('should be a boolean', () => {
    const { areSameLength } = funcs;
    const length = areSameLength('Mark', 'Cube');
    assert.typeOf(length, 'Boolean');
  });
});

describe('`areEqual`', () => {
  it('should be a function', () => {
    const areEqual = funcs.areEqual;
    assert.typeOf(areEqual, 'function');
  });
  it('should equal to each other', () => {
    const { areEqual } = funcs;
    const nums = areEqual(50, 50);
    assert.equal(nums, true);
  });
});

describe('`lessThanNinety`', () => {
  it('should be a function', () => {
    const lessThanNinety = funcs.lessThanNinety;
    assert.typeOf(lessThanNinety, 'function');
  });
  it('should be a number', () => {
    const { lessThanNinety } = funcs;
    const num = lessThanNinety(50);
    assert.typeOf(num, 'number');
  });
});

describe('`greaterThanFifty`', () => {
  it('should be a function', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    assert.typeOf(greaterThanFifty, 'function');
  });
});

describe('`add`', () => {
  it('should be a function', () => {
    const add = funcs.add;
    assert.typeOf(add, 'function');
  });
});

describe('`subtract`', () => {
  it('should be a function', () => {
    const subtract = funcs.subtract;
    assert.typeOf(subtract, 'function');
  });
});

describe('`divide`', () => {
  it('should be a function', () => {
    const divide = funcs.divide;
    assert.typeOf(divide, 'function');
  });
});

describe('`multiply`', () => {
  it('should be a function', () => {
    const multiply = funcs.multiply;
    assert.typeOf(multiply, 'function');
  });
});

describe('`getRemainder`', () => {
  it('should be a function', () => {
    const getRemainder = funcs.getRemainder;
    assert.typeOf(getRemainder, 'function');
  });
});

describe('`isEven`', () => {
  it('should be a function', () => {
    const isEven = funcs.isEven;
    assert.typeOf(isEven, 'function');
  });
});

describe('`isOdd`', () => {
  it('should be a function', () => {
    const isOdd = funcs.isOdd;
    assert.typeOf(isOdd, 'function');
  });
});

describe('`square`', () => {
  it('should be a function', () => {
    const square = funcs.square;
    assert.typeOf(square, 'function');
  });
});

describe('`cube`', () => {
  it('should be a function', () => {
    const cube = funcs.cube;
    assert.typeOf(cube, 'function');
  });
});

describe('`raiseToPower`', () => {
  it('should be a function', () => {
    const raiseToPower = funcs.raiseToPower;
    assert.typeOf(raiseToPower, 'function');
  });
});

describe('`roundNumber`', () => {
  it('should be a function', () => {
    const roundNumber = funcs.roundNumber;
    assert.typeOf(roundNumber, 'function');
  });
});

describe('`roundUp`', () => {
  it('should be a function', () => {
    const roundUp = funcs.roundUp;
    assert.typeOf(roundUp, 'function');
  });
});

describe('`addExclamationPoint`', () => {
  it('should be a function', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    assert.typeOf(addExclamationPoint, 'function');
  });
});

describe('`combineNames`', () => {
  it('should be a function', () => {
    const combineNames = funcs.combineNames;
    assert.typeOf(combineNames, 'function');
  });
});

describe('`getGreeting`', () => {
  it('should be a function', () => {
    const getGreeting = funcs.getGreeting;
    assert.typeOf(getGreeting, 'function');
  });
});

describe('`getRectangleArea`', () => {
  it('should be a function', () => {
    const getRectangleArea = funcs.getRectangleArea;
    assert.typeOf(getRectangleArea, 'function');
  });
});

describe('`getTriangleArea`', () => {
  it('should be a function', () => {
    const getTriangleArea = funcs.getTriangleArea;
    assert.typeOf(getTriangleArea, 'function');
  });
});

describe('`getCircleArea`', () => {
  it('should be a function', () => {
    const getCircleArea = funcs.getCircleArea;
    assert.typeOf(getCircleArea, 'function');
  });
});

describe('`getRectangularPrismVolume`', () => {
  it('should be a function', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    assert.typeOf(getRectangularPrismVolume, 'function');
  });
});
