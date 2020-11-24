import { expect } from "chai";

import { csv } from "../../../src/constants/parser";
import Processor from "../../../src/processor";
import {
    NO_DATA_PRESENT,
  OUTPUT_FILES_CREATED_SUCCESSFULLY,
} from "../../../src/constants/response";

describe("Processor", () => {
  it("should return output when valid input is mentioned", () => {
    const processorObject = new Processor(
      {
        input: '/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/input/customer-data-one.csv',
        output: {
          validFilePath: '/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/output/output-one.csv',
          invalidFilePath: '/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/output/output-two.csv',
        },
      },
      csv,
      {
        delimiter: ",",
      }
    );
    return processorObject.processInputAndCreateOutput().then((result) => {
      expect(result).to.equal(OUTPUT_FILES_CREATED_SUCCESSFULLY);
    });
  });

  it("should return output when empty input file is mentioned", () => {
    const processorObject = new Processor(
      {
        input: '/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/input/customer-data-two.csv',
        output: {},
      },
      csv,
      {
        delimiter: ",",
      }
    );
    return processorObject.processInputAndCreateOutput().then((result) => {
      expect(result).to.equal(NO_DATA_PRESENT);
    });
  });
});
