import { assert, expect } from "chai";
import { ERROR_PARSING_INPUT } from "../../../../../src/constants/error";
import CSVInputParser from "../../../../../src/parser/csv/input";

describe("CSV Input Parser Error scenario", () => {
  it("should throw error when error occurs during parsing input", () => {
    const csvInputParserObject = new CSVInputParser(
      "/dummyPath",
      {
        delimiter: ",",
      }
    );
    return csvInputParserObject
      .readFromInput()
      .then(()=>{
        assert.fail();
      })
      .catch((err) => {
        expect(err.message).to.equal(ERROR_PARSING_INPUT);
      });
  });
});
