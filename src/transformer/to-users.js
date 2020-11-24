import UserModel from '../model/user';

export default class ToUsers {
  #users;
  constructor() {
    this.#users = [];
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
      mobilePhone,
      bookedCabin,
    ] = Object.keys(data[0]);
    data.forEach((element) => {
      this.#users.push(
        new UserModel(
          element[firstName],
          element[lastName],
          element[pnr],
          element[fareClass],
          element[travelDate],
          element[pax],
          element[ticketingDate],
          element[email],
          element[mobilePhone],
          element[bookedCabin],
        ),
      );
    });
    
    return this.#users;
  }
}
