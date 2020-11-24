import { expect } from 'chai';

import transformData from '../../src';
import { NO_DATA_PRESENT, OUTPUT_FILES_CREATED_SUCCESSFULLY } from '../../src/constants/response';

describe('ParseFile', () => {
  it('should return output when valid input file is mentioned', () => transformData({
    input: '/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/input/customer-data-one.csv',
    output: {
      validFilePath: '/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/output/output-one.csv',
      invalidFilePath: '/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/output/output-two.csv',
    },
  }).then((result) => {
    expect(result).to.equal(OUTPUT_FILES_CREATED_SUCCESSFULLY);
  }));

  it('should return output when input file with no data is mentioned', () => transformData({
    input: '/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/input/customer-data-two.csv',
    output: {},
  }).then((result) => {
    expect(result).to.equal(NO_DATA_PRESENT);
  }));
});
