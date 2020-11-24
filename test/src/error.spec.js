import { expect } from 'chai';

import transformData from '../../src';
import { ERROR_PARSING_INPUT } from '../../src/constants/error';

describe('ParseFile Error Scenario', () => {
  it('should throw error when invalid input file is mentioned', async () => {
    try {
      await transformData({
        input: 'dummy path',
        output: {},
      });
    } catch (err) {
      expect(err.message).to.equal(ERROR_PARSING_INPUT);
    }
  });
});
