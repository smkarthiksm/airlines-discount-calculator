import UserModel from '../model/user';

export default class ToUsers {
  constructor() {
    this.users = [];
  }

  createUsersFromData(data) {
    const [
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
    ] = Object.keys(data[0]);
    data.forEach((element) => {
      this.users.push(
        new UserModel(
          element[firstName],
          element[lastName],
          element[pnr],
          element[fareClass],
          element[travelDate],
          element[pax],
          element[ticketingDate],
          element[email],
          element[phoneNo],
          element[bookedCabin],
        ),
      );
    });

    return this.users;
  }
}
