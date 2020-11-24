import { expect } from "chai";
import AddAdditionalFields from "../../../../src/conditions/add-additional-fields";
import {
  OFFER_THIRTY,
  OFFER_TWENTY,
  OFFER_TWENTY_FIVE,
} from "../../../../src/constants";

let user;
beforeEach("reset user", () => {
  user = {
    firstName: "Abhishek",
    lastName: "Kumar",
    pnr: "ABC123",
    travelDate: "2019-07-31",
    pax: "2",
    ticketingDate: "2019-05-21",
    email: "abhishek@zzz.com",
    mobilePhone: "9876543210",
    bookedCabin: "Economy",
  };
});
describe("Add Offers", () => {
  it("should add OFFER_20 when valid fare class is present", () => {
    ["A", "B", "C", "D", "E"].forEach((fareClass) => {
      user.fareClass = fareClass;

      new AddAdditionalFields().addOfferBasedOnFareClass(user);

      return expect(user).to.deep.equal({
        firstName: "Abhishek",
        lastName: "Kumar",
        pnr: "ABC123",
        fareClass,
        travelDate: "2019-07-31",
        pax: "2",
        ticketingDate: "2019-05-21",
        email: "abhishek@zzz.com",
        mobilePhone: "9876543210",
        bookedCabin: "Economy",
        discountCode: OFFER_TWENTY,
      });
    });
  });

  it("should add OFFER_30 when valid fare class is present", () => {
    ["F", "G", "H", "I", "J", "K"].forEach((fareClass) => {
      user.fareClass = fareClass;

      new AddAdditionalFields().addOfferBasedOnFareClass(user);

      return expect(user).to.deep.equal({
        firstName: "Abhishek",
        lastName: "Kumar",
        pnr: "ABC123",
        fareClass,
        travelDate: "2019-07-31",
        pax: "2",
        ticketingDate: "2019-05-21",
        email: "abhishek@zzz.com",
        mobilePhone: "9876543210",
        bookedCabin: "Economy",
        discountCode: OFFER_THIRTY,
      });
    });
  });
  it("should add OFFER_25 when valid fare class is present", () => {
    ["L", "M", "N", "O", "P", "Q", "R"].forEach((fareClass) => {
      user.fareClass = fareClass;

      new AddAdditionalFields().addOfferBasedOnFareClass(user);

      return expect(user).to.deep.equal({
        firstName: "Abhishek",
        lastName: "Kumar",
        pnr: "ABC123",
        fareClass,
        travelDate: "2019-07-31",
        pax: "2",
        ticketingDate: "2019-05-21",
        email: "abhishek@zzz.com",
        mobilePhone: "9876543210",
        bookedCabin: "Economy",
        discountCode: OFFER_TWENTY_FIVE,
      });
    });
  });

  it("should not add offer when invalid fare class is present", () => {
    ["S", "T", "U", "V", "W", "X", "Y", "Z"].forEach((fareClass) => {
      user.fareClass = fareClass;

      new AddAdditionalFields().addOfferBasedOnFareClass(user);

      return expect(user).to.deep.equal({
        firstName: "Abhishek",
        lastName: "Kumar",
        pnr: "ABC123",
        fareClass,
        travelDate: "2019-07-31",
        pax: "2",
        ticketingDate: "2019-05-21",
        email: "abhishek@zzz.com",
        mobilePhone: "9876543210",
        bookedCabin: "Economy",
        discountCode: "",
      });
    });
  });
});
