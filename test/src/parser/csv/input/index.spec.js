import { expect } from "chai";
import CSVInputParser from "../../../../../src/parser/csv/input";
import { FILE_BASE_PATH } from "../../../../constants";

describe("CSV Input Parser", () => {
  it("should return output when valid input is mentioned", () => {
    const csvInputParserObject = new CSVInputParser(
      `${FILE_BASE_PATH}/sample-files/input/customer-data-one.csv`,
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
        {
          First_name: "Monin",
          Last_name: "Sankar",
          PNR: "PQ234",
          Fare_class: "C",
          Travel_date: "2019-08-30",
          Pax: "2",
          Ticketing_date: "2019-05-22",
          Email: "monin@zzz.com",
          Mobile_phone: "9876543211",
          Booked_cabin: "Economy",
        },
        {
          First_name: "Radhika",
          Last_name: "Suresh",
          PNR: "ZZZ345",
          Fare_class: "T",
          Travel_date: "2019-05-31",
          Pax: "4",
          Ticketing_date: "2019-05-21",
          Email: "radhika@zzz",
          Mobile_phone: "9876543212",
          Booked_cabin: "Business",
        },
        {
          First_name: "Kalyani",
          Last_name: "Ben",
          PNR: "A1B2C3",
          Fare_class: "M",
          Travel_date: "2019-04-30",
          Pax: "1",
          Ticketing_date: "2019-05-21",
          Email: "​kben@zzz.com​",
          Mobile_phone: "9876543213",
          Booked_cabin: "Premium Economy",
        },
        {
          First_name: "Somnath",
          Last_name: "Batra",
          PNR: "X1Y2Z4",
          Fare_class: "Z",
          Travel_date: "2019-07-25",
          Pax: "3",
          Ticketing_date: "2019-05-23",
          Email: "sbatra@zzz.com",
          Mobile_phone: "9876543214",
          Booked_cabin: "Economy",
        },
      ]);
    });
  });
  it("should return output when empty file is mentioned", () => {
    const csvInputParserObject = new CSVInputParser(
      `${FILE_BASE_PATH}/sample-files/input/customer-data-two.csv`,
      {
        delimiter: ",",
      }
    );
    return csvInputParserObject.readFromInput().then((result) => {
      expect(result).to.deep.equal([]);
    });
  });
});
