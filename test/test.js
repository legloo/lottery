'use strict';
const utils = require('../dist/index.js');

describe('ts-hi function test', () => {
    it('should return 3', () => {
        let rules = [3, 2, 1, 4, 5]
        let res = utils.combination(rules);
        console.log(res);
    });
});