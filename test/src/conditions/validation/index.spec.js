import { expect } from 'chai';
import { bookedCabin, email, mobilePhone, pnr, ticketingDate } from '../../../../src/constants';
import ValidatorResult from '../../../../src/model/validator-result';
import Validator from '../../../../src/conditions/validation';

describe('Validator', () => {
    it('should return true when all fields are valid', () => {
      expect(
        new Validator().performValidation({
          email: 'abcd@gmail.com',
          mobilePhone: '9876543210',
          ticketingDate: '2019-07-31',
          travelDate: '2019-10-31',
          pnr: 'abc123',
          bookedCabin: 'Economy',
        }),
      ).to.deep.equal(new ValidatorResult(true));
    });

    describe('Validate email', () => {
    it('should return false when atleast one field is invalid(email) - scenario 1', () => {
      const result = new Validator().performValidation({
        email: 'abcd.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });
      expect(result).to.eql(new ValidatorResult(false, email));
    });
    it('should return false when atleast one field is invalid(email) - scenario 2', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });
      expect(result).to.eql(new ValidatorResult(false, email));
    });
    it('should return false when atleast one field is invalid(email) - scenario 3', () => {
      const result = new Validator().performValidation({
        email: 'abcd',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });
      expect(result).to.eql(new ValidatorResult(false, email));
    });
    it('should return false when atleast one field is invalid(email) - scenario 4', () => {
      const result = new Validator().performValidation({
        email: '',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });
      expect(result).to.eql(new ValidatorResult(false, email));
    });
  });

  describe('Validate mobilePhone', () => {
    it('should return false when atleast one field is invalid(mobilePhone) - scenario 1', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: 'abcd',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });

      expect(result).to.deep.eql(new ValidatorResult(false, mobilePhone));
    });
    it('should return false when atleast one field is invalid(mobilePhone) - scenario 2', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '87543451ab',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });

      expect(result).to.deep.eql(new ValidatorResult(false, mobilePhone));
    });
    it('should return false when atleast one field is invalid(mobilePhone) - scenario 3', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '12334676543234',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });

      expect(result).to.deep.eql(new ValidatorResult(false, mobilePhone));
    });
    it('should return false when atleast one field is invalid(mobilePhone) - scenario 4', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });

      expect(result).to.deep.eql(new ValidatorResult(false, mobilePhone));
    });
  });

  describe('Validate ticketingDate', () => {
    it('should return false when atleast one field is invalid(ticketingDate) - scenario 2(ticketDate is equal to travel date)', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-07-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, ticketingDate));
    });
    it('should return false when atleast one field is invalid(ticketingDate) - scenario 3(ticketDate is after travel date)', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-01-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, ticketingDate));
    });
    it('should return false when atleast one field is invalid(ticketingDate) - scenario 4(ticketDate is present and travel date is absent)', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, ticketingDate));
    });
    it('should return false when atleast one field is invalid(ticketingDate) - scenario 5(ticketDate is absent and travel date is present)', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '',
        travelDate: '2019-07-31',
        pnr: 'abc123',
        bookedCabin: 'Economy',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, ticketingDate));
    });
  });

  describe('Validate pnr', () => {
    it('should return false when atleast one field is invalid(pnr) - scenario 1(more characters are present)', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc12345',
        bookedCabin: 'Economy',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, pnr));
    });
    it('should return false when atleast one field is invalid(pnr) - scenario 2(less characters are present)', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: '123',
        bookedCabin: 'Economy',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, pnr));
    });
    it('should return false when atleast one field is invalid(pnr) - scenario 3(no numbers are present)', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abcdef',
        bookedCabin: 'Economy',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, pnr));
    });
    it('should return false when atleast one field is invalid(pnr) - scenario 4(no characters are present)', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: '123456',
        bookedCabin: 'Economy',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, pnr));
    });
    it('should return false when atleast one field is invalid(pnr) - scenario 5(empty)', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: '',
        bookedCabin: 'Economy',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, pnr));
    });
  });

  describe('Validate bookedCabin', () => {
    it('should return false when atleast one field is invalid(bookedCabin) - scenario 1', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: 'invalid',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, bookedCabin));
    });
    it('should return false when atleast one field is invalid(bookedCabin) - scenario 2', () => {
      const result = new Validator().performValidation({
        email: 'abcd@gmail.com',
        mobilePhone: '9876543210',
        ticketingDate: '2019-07-31',
        travelDate: '2019-10-31',
        pnr: 'abc123',
        bookedCabin: '',
      });
      expect(result).to.deep.eql(new ValidatorResult(false, bookedCabin));
    });
  });
});
