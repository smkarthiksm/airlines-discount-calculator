import { expect } from 'chai';
import { bookedCabin, email, mobilePhone, pnr, ticketingDate } from '../../../src/constants';
import ToUsers from '../../../src/transformer/to-users';

const sampleData = [{
    First_name: 'Abhishek',
    Last_name: 'Kumar',
    PNR: 'ABC123',
    Fare_class: 'F',
    Travel_date: '2019-07-31',
    Pax: '2',
    Ticketing_date: '2019-05-21',
    Email: 'abhishek@zzz.com',
    Mobile_phone: '9876543210',
    Booked_cabin: 'Economy'
  },
  {
    First_name: 'Monin',
    Last_name: 'Sankar',
    PNR: 'PQ234',
    Fare_class: 'C',
    Travel_date: '2019-08-30',
    Pax: '2',
    Ticketing_date: '2019-05-22',
    Email: 'monin@zzz.com',
    Mobile_phone: '9876543211',
    Booked_cabin: 'Economy'
  }];

describe('Transformer', () => {
    it('should return array of users', () => {
        const expectedOutput = [
            {
              firstName: 'Abhishek',
              lastName: 'Kumar',
              pnr: 'ABC123',
              fareClass: 'F',
              travelDate: '2019-07-31',
              pax: '2',
              ticketingDate: '2019-05-21',
              email: 'abhishek@zzz.com',
              mobilePhone: '9876543210',
              bookedCabin: 'Economy'
            },
            {
              firstName: 'Monin',
              lastName: 'Sankar',
              pnr: 'PQ234',
              fareClass: 'C',
              travelDate: '2019-08-30',
              pax: '2',
              ticketingDate: '2019-05-22',
              email: 'monin@zzz.com',
              mobilePhone: '9876543211',
              bookedCabin: 'Economy'
            }];
     expect(new ToUsers().createUsersFromData(sampleData)).to.deep.equal(expectedOutput)
    });
});
