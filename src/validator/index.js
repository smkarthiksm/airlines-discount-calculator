import * as constants from '../constants';
import ValidatorResult from '../model/validator-result';

export default class Validator {
  constructor() {
    this.validatorsLookup = {};
    this.setupValidators();
  }

  setupValidators() {
    this.validatorsLookup = {
      [constants.email]: Validator.validateEmail,
      [constants.phoneNo]: Validator.validatePhoneNo,
      [constants.ticketingDate]: Validator.validateTicketingDate,
      [constants.pnr]: Validator.validatePNR,
      [constants.bookedCabin]: Validator.validateBookedCabin,
    };
  }

  static validateEmail({ email }) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email.toLowerCase());
  }

  static validatePhoneNo({ phoneNo }) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(+phoneNo);
  }

  static validateTicketingDate({ ticketingDate, travelDate }) {
    return new Date(ticketingDate) < new Date(travelDate);
  }

  static validatePNR({ pnr }) {
    const regex = /^[a-zA-Z0-9]{6}$/;
    return regex.test(pnr);
  }

  static validateBookedCabin({ bookedCabin }) {
    const allowedCabins = [
      'Economy',
      'Premium',
      'Economy',
      'Business',
      'First',
    ];
    return allowedCabins.includes(bookedCabin);
  }

  performValidation(user) {
    const keys = Object.keys(this.validatorsLookup);
    for (let i = 0; i < keys.length; i++) {
      if (!this.validatorsLookup[keys[i]](user)) {
        return new ValidatorResult(
          false,
          keys[i],
        );
      }
    }
    return new ValidatorResult(
      true,
    );
  }

  static getAllowedCabins() {

  }
}
