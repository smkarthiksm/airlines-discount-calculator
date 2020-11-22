import csvToJSON from 'csvtojson';
import { ERROR_PARSING_INPUT } from '../../constants/error';
import ExceptionHandler from '../../exception/exception-handler';

export default class CSVInputParser {
  constructor(filePath, options) {
    this.filePath = filePath;
    this.options = options;
  }

  async readFromInput() {
    try {
      return await csvToJSON({
        delimiter: this.options.delimiter,
      }).fromFile(this.filePath);
    } catch (err) {
      throw new ExceptionHandler(ERROR_PARSING_INPUT);
    }
  }
}
