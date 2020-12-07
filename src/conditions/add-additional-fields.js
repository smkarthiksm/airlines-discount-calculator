import * as constants from "../constants";
import { conditions } from "./conditions";

export default class AddAdditionalFields {
  constructor() {
    this.validatorMapping = {
      [constants.email]: this.emailValidator,
    };
  }
  addOfferBasedOnFareClass(user) {
    let discount = "";

    if (this.checkIfDiscountIsApplicable(user, conditions)) {
      if (user.fareClass >= "A" && user.fareClass <= "E") {
        discount = constants.OFFER_TWENTY;
      } else if (user.fareClass >= "F" && user.fareClass <= "K") {
        discount = constants.OFFER_THIRTY;
      } else if (user.fareClass >= "L" && user.fareClass <= "R") {
        discount = constants.OFFER_TWENTY_FIVE;
      }
    }
    user[constants.discountCode] = discount;
  }

  addErrorReason(user, validation) {
    user.error = `Invalid ${validation.error}`;
  }

  checkIfDiscountIsApplicable(user, conditions, lastResult = true) {
    if (conditions.length) {
      if (typeof conditions == "object" && !Array.isArray(conditions)) {
        const { propertyName, propertyValue } = conditions;
        return this.validatorMapping[propertyName](user, propertyValue);
      } else if (typeof conditions == "string") {
        if (conditions == "or") {
          return (
            lastResult ||
            this.checkIfDiscountIsApplicable(user, conditions.slice(1), lastResult)
          );
        }
        if (conditions == "and") {
          return (
            lastResult &&
            this.checkIfDiscountIsApplicable(user, conditions.slice(1), lastResult)
          );
        }
      } else if (Array.isArray(conditions)) {
        let condition = conditions.slice(1);
        if (typeof condition == "object" && !Array.isArray(conditions)) {
          const { propertyName, propertyValue } = conditions;
          lastResult = this.validatorMapping[propertyName](user, propertyValue);
          return this.checkIfDiscountIsApplicable(
            user,
            conditions.slice(1),
            lastResult
          );
        }
      }
    }

    return true;
  }

  emailValidator(user, emails) {
    if (emails.includes(user.email)) {
      return true;
    }

    return false;
  }
}
