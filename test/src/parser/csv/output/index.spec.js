import { expect } from "chai";
import { headerForValidFile } from "../../../../../src/constants/parser";
import CSVOutputWriter from "../../../../../src/parser/csv/output";
import fs from "fs";
import { FILE_BASE_PATH } from "../../../../constants";

describe("CSV Output Parser", () => {
  it("should create output file when valid input is given", () => {
    const csvOutputWriterObject = new CSVOutputWriter(
        `${FILE_BASE_PATH}/sample-files/output/csv-parser-output.csv`,
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
        expect(
          fs.existsSync(`${FILE_BASE_PATH}/sample-files/output/csv-parser-output.csv`
          )
        ).to.equal(true);
      });
  });
});
