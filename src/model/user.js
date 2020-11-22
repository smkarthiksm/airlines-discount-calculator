export default class UserModel {
  constructor(
    firstName,
    lastName,
    pnr,
    fareClass,
    travelDate,
    pax,
    ticketingDate,
    email,
    phoneNo,
    bookedCabin,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pnr = pnr;
    this.fareClass = fareClass;
    this.travelDate = travelDate;
    this.pax = pax;
    this.ticketingDate = ticketingDate;
    this.email = email;
    this.phoneNo = phoneNo;
    this.bookedCabin = bookedCabin;
  }
}
