import ToUsers from '../transformer/to-users';
import { inputParsers, outputParsers } from '../parser';
import Validator from '../validator';

export default class Processor {
  constructor(fileConfig, parserType, parserOtions) {
    this.fileConfig = fileConfig;
    this.parserType = parserType;
    this.parserOtions = parserOtions;
    this.validUsers = [];
    this.invalidUsers = [];
  }

  async processInputAndCreateOutput() {
    // eslint-disable-next-line no-useless-catch
    try {
      const data = await this.parseInput();
      const users = Processor.getUsers(data);

      this.validateUserData(users);

      return this.writeOutput();
    } catch (err) {
      throw err;
    }
  }

  static getUsers(data) {
    return new ToUsers().createUsersFromData(data);
  }

  parseInput() {
    const parser = new inputParsers[this.parserType](this.fileConfig.input, this.parserOtions);

    return parser.readFromInput();
  }

  validateUserData(users) {
    const validator = new Validator();

    users.forEach((user) => {
      const validation = validator.performValidation(user);

      if (validation.result) {
        this.validUsers.push(user);
      } else {
        // eslint-disable-next-line no-param-reassign
        user.error = `Invalid ${validation.error}`;
        this.invalidUsers.push(user);
      }
    });
  }

  writeOutput() {
    const parser = new outputParsers[this.parserType](this.fileConfig.output, this.parserOtions);

    return parser.writeToOutput(this.validUsers, this.invalidUsers);
  }
}
