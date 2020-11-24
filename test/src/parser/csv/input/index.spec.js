import { expect } from "chai";
import CSVInputParser from "../../../../../src/parser/csv/input";

describe("CSV Input Parser", () => {
  it("should return output when valid input is mentioned", () => {
    const csvInputParserObject = new CSVInputParser(
      "/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/input/customer-data-one.csv",
      {
        delimiter: ",",
      }
    );
    return csvInputParserObject.readFromInput().then((result) => {
      expect(result).to.deep.equal([
        {
          First_name: "Abhishek",
          Last_name: "Kumar",
          PNR: "ABC123",
          Fare_class: "F",
          Travel_date: "2019-07-31",
          Pax: "2",
          Ticketing_date: "2019-05-21",
          Email: "abhishek@zzz.com",
          Mobile_phone: "9876543210",
          Booked_cabin: "Economy",
        },
      ]);
    });
  });
  it("should return output when empty file is mentioned", () => {
    const csvInputParserObject = new CSVInputParser(
      "/Users/karthiksm/Documents/github/airlines-discount-service/test/sample-files/input/customer-data-two.csv",
      {
        delimiter: ",",
      }
    );
    return csvInputParserObject.readFromInput().then((result) => {
      expect(result).to.deep.equal([]);
    });
  });
});
