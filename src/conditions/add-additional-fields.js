import * as constants from "../constants";

export default class AddAdditionalFields {
  addOfferBasedOnFareClass(user) {
    let discount = "";
    if (user.fareClass >= "A" && user.fareClass <= "E") {
      discount = constants.OFFER_TWENTY;
    } else if (user.fareClass >= "F" && user.fareClass <= "K") {
      discount = constants.OFFER_THIRTY;
    } else if (user.fareClass >= "L" && user.fareClass <= "R") {
      discount = constants.OFFER_TWENTY_FIVE;
    }
    user[constants.discountCode] = discount;
  }

  addErrorReason(user, validation) {
    user.error = `Invalid ${validation.error}`;
  }
}
