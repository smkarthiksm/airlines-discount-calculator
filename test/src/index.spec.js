import { expect } from 'chai';

import transformData from '../../src';
import { NO_DATA_PRESENT, OUTPUT_FILES_CREATED_SUCCESSFULLY } from '../../src/constants/response';
import { FILE_BASE_PATH } from '../constants';

describe('ParseFile', () => {
  it('should return output when valid input file is mentioned', () => transformData({
    input: `${FILE_BASE_PATH}/sample-files/input/customer-data-one.csv`,
    output: {
      validFilePath: `${FILE_BASE_PATH}/sample-files/output/parse-file-output-one.csv`,
      invalidFilePath: `${FILE_BASE_PATH}/sample-files/output/parse-file-output-two.csv`,
    },
  }).then((result) => {
    expect(result).to.equal(OUTPUT_FILES_CREATED_SUCCESSFULLY);
  }));

  it('should return output when input file with no data is mentioned', () => transformData({
    input: `${FILE_BASE_PATH}/sample-files/input/customer-data-two.csv`,
    output: {},
  }).then((result) => {
    expect(result).to.equal(NO_DATA_PRESENT);
  }));
});
