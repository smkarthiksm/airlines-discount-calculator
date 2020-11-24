import * as constants from '../constants';
import ValidatorResult from '../model/validator-result';

export default class Validator {
  #validatorsLookup;
  constructor() {
    this.#validatorsLookup = {};
    this.#setupValidators();
  }

  #setupValidators() {
    this.#validatorsLookup = {
      [constants.email]: this.#validateEmail,
      [constants.mobilePhone]: this.#validatemobilePhone,
      [constants.ticketingDate]: this.#validateTicketingDate,
      [constants.pnr]: this.#validatePNR,
      [constants.bookedCabin]: this.#validateBookedCabin,
    };
  }

  #validateEmail({ email }) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email.toLowerCase());
  }

  #validatemobilePhone({ mobilePhone }) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(mobilePhone);
  }

  #validateTicketingDate({ ticketingDate, travelDate }) {
    return new Date(ticketingDate) < new Date(travelDate);
  }

  #validatePNR({ pnr }) {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{6}$/;
    return regex.test(pnr);
  }

  #validateBookedCabin({ bookedCabin }) {
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
    const keys = Object.keys(this.#validatorsLookup);
    for (let i = 0; i < keys.length; i++) {
      if (!this.#validatorsLookup[keys[i]](user)) {
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
}
