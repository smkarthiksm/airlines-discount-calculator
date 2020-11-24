import { stub } from "sinon";
import * as csvWriter from "csv-writer";
import { expect } from "chai";
import { csv, headerForValidFile } from "../../../../../src/constants/parser";
import CSVOutputWriter from "../../../../../src/parser/csv/output";
import { ERROR_WRITING_OUTPUT } from "../../../../../src/constants/error";

describe("CSV Output Parser Error scenario", () => {
  before("stub dependency", () => {
    stub(csvWriter, "createObjectCsvWriter").throws(ERROR_WRITING_OUTPUT);
  });

  after("restore dependency", () => {
    csvWriter.createObjectCsvWriter.restore();
  });

  it("should throw error when error occurs during writing output", () => {
    const csvOutputWriterObject = new CSVOutputWriter(
      "/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/output/csv-parser-output.csv",
      {
        delimiter: ",",
      },
      headerForValidFile
    );
    return csvOutputWriterObject
      .writeToOutput([
        {
          firstName: "Abhishek",
          lastName: "Kumar",
          pnr: "ABC123",
          fareClass: "F",
          travelDate: "2019-07-31",
          pax: "2",
          ticketingDate: "2019-05-21",
          email: "abhishek@zzz.com",
          mobilePhone: "9876543210",
          bookedCabin: "Economy",
        },
      ])
      .then(() => {
        assert.fail();
      })
      .catch((err) => {
        expect(err.message).to.equal(ERROR_WRITING_OUTPUT);
      });
  });
});
