import * as constants from './';
export const csv = 'csv';
export const commonHeaders = [
    { id: constants.firstName, title: constants.FIRST_NAME },
    { id: constants.lastName, title: constants.LAST_NAME },
    { id: constants.pnr, title: constants.PNR },
    { id: constants.fareClass, title: constants.FARE_CLASS },
    { id: constants.travelDate, title: constants.TRAVEL_DATE },
    { id: constants.pax, title: constants.PAX },
    { id: constants.ticketingDate, title: constants.TICKETING_DATE },
    { id: constants.email, title: constants.EMAIL },
    { id: constants.mobilePhone, title: constants.MOBILE_PHONE },
    { id: constants.bookedCabin, title: constants.BOOKED_CABIN },
  ];
export const headerForValidFile = [
  ...commonHeaders,
  { id: constants.discountCode, title: constants.DISCOUNT_CODE },
];
export const headerForInValidFile = [
    ...commonHeaders,
    { id: constants.error, title: constants.ERROR },
];