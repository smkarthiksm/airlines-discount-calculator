import { createObjectCsvWriter } from "csv-writer";
import { ERROR_WRITING_OUTPUT } from "../../constants/error";
import ExceptionHandler from "../../exception/exception-handler";

export default class CSVOutputWriter {
  constructor(filePath, options, header) {
    this.filePath = filePath;
    this.options = options;
    this.header = header;
  }

  async writeToOutput(data) {
    try {
      return await this.#writeUsers(data);
    } catch (err) {
      throw new ExceptionHandler(ERROR_WRITING_OUTPUT);
    }
  }

  #writeUsers(data) {
    const csvWriter = createObjectCsvWriter({
      fieldDelimiter: this.options.delimiter,
      header: this.header,
      path: this.filePath,
    });

    return csvWriter.writeRecords(data);
  }
}
