import assert from 'assert';
import { countSiblings, willBeAlive, nextState, viewLife, createField } from './src/Life.js';

describe('countSiblings', function () {
    it('should return 1', function () {
        assert.equal(countSiblings(['1,1'], 1, 0), 1)
    });
    it('should return 4', function () {
        assert.equal(countSiblings(['0,0', '0,1', '0,2', '1,2'], 1, 1), 4)
    });
});


// example

describe('willBeAlive', function () {
    it('should be dead if < 2', function () {
        assert.equal(willBeAlive(1, false), false);
    });

    it('should be dead if > 3', function () {
        assert.equal(willBeAlive(5, false), false);
    });

    it('should be alive if == 3', function () {
        assert.equal(willBeAlive(3, false), true);
    });

    it('should be dead if == 2 and dead', function () {
        assert.equal(willBeAlive(2, false), false);
    });

    it('should be alive if == 2 and alive', function () {
        assert.equal(willBeAlive(2, true), true);
    });

});

describe('nextState', function() {
   it('should do nothing', function() {
       assert.deepEqual(nextState([]), []);
   });

    it('should state block', function() {
        assert.deepEqual(nextState(["0,0", "0,1", "1,0", "1,1"]), ["0,0", "0,1", "1,0", "1,1"]);
    });

    it('should rotate blinker', function() {
        assert.deepEqual(nextState(["0,0", "1,0", "2,0"]), ["1,-1", "1,0", "1,1"]);
    });
});

describe('view', function () {
    it('should do 1 tick', function () {
        assert.deepEqual(viewLife(["0,0", "1,0", "2,0"], 1), ["1,-1", "1,0", "1,1"]);
    });

    it('should do 2 tick', function () {
        assert.deepEqual(viewLife(["0,0", "1,0", "2,0"], 2), ["0,0", "1,0", "2,0"]);
    });

    it('should do 5 tick', function () {
        assert.deepEqual(viewLife(["0,0", "1,0", "2,0"], 5), ["1,-1", "1,0", "1,1"]);
    });
});

describe('createField', function () {
    it('should do 1*1 field', function () {
        assert.deepEqual(createField(1, 1), [ ['.'] ]);
    });

    it('should do 5*2 field', function () {
        assert.deepEqual(createField(5, 2), [ ['.', '.'], ['.', '.'], ['.', '.'], ['.', '.'], ['.', '.'] ]);
    });

});



