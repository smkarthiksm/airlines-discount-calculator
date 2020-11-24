import { expect } from "chai";
import UserModel from "../../../../src/model/user";

describe("User model", () => {
  it("should create output file when valid input is given", () => {
    return expect(
      new UserModel(
        "Abhishek",
        "Kumar",
        "ABC123",
        "F",
        "2019-07-31",
        "2",
        "2019-05-21",
        "abhishek@zzz.com",
        "9876543210",
        "Economy"
      )
    ).to.deep.equal({
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
    });
  });
});
