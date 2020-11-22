import { createObjectCsvWriter } from 'csv-writer';
import * as constants from '../../constants';
import { ERROR_WRITING_OUTPUT } from '../../constants/error';
import { OUTPUT_FILES_CREATED_SUCCESSFULLY } from '../../constants/response';
import ExceptionHandler from '../../exception/exception-handler';

export default class CSVOutputWriter {
  constructor(fileConfig, options) {
    this.fileConfig = fileConfig;
    this.options = options;
  }

  async writeToOutput(validUsers, invalidUsers) {
    try {
      await this.writeValidUsers(validUsers, CSVOutputWriter.header);
      await this.writeInvalidUsers(invalidUsers, CSVOutputWriter.header);
    } catch (err) {
      throw new ExceptionHandler(ERROR_WRITING_OUTPUT);
    }
    return OUTPUT_FILES_CREATED_SUCCESSFULLY;
  }

  async writeValidUsers(users) {
    const csvWriter = createObjectCsvWriter({
      header: CSVOutputWriter.header,
      path: this.fileConfig.validFilePath,
    });

    return CSVOutputWriter.writeRecords(users, csvWriter);
  }

  async writeInvalidUsers(users) {
    CSVOutputWriter.header.push({ id: constants.error, title: constants.ERROR });

    const csvWriter = createObjectCsvWriter({
      fieldDelimiter: this.options.delimiter,
      header: CSVOutputWriter.header,
      path: this.fileConfig.invalidFilePath,
    });

    return CSVOutputWriter.writeRecords(users, csvWriter);
  }

  static async writeRecords(users, csvWriter) {
    await csvWriter.writeRecords(users);
  }
}

CSVOutputWriter.header = [
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
