import ToUsers from "../transformer/to-users";
import { inputParsers, outputParsers } from "../parser";
import Validator from "../validator";
import {
  NO_DATA_PRESENT,
  OUTPUT_FILES_CREATED_SUCCESSFULLY,
} from "../constants/response";
import { headerForInValidFile, headerForValidFile } from "../constants/parser";

export default class Processor {
  #validUsers;
  #invalidUsers;
  constructor(fileConfig, parserType, parserOtions) {
    this.fileConfig = fileConfig;
    this.parserType = parserType;
    this.parserOtions = parserOtions;
    this.#validUsers = [];
    this.#invalidUsers = [];
  }

  async processInputAndCreateOutput() {
    // eslint-disable-next-line no-useless-catch
    try {
      const data = await this.#parseInput();
      if (data.length) {
        const users = this.#getUsers(data);

        this.#validateUserData(users);

        return this.#writeOutput();
      }

      return NO_DATA_PRESENT;
    } catch (err) {
      throw err;
    }
  }

  #getUsers(data) {
    return new ToUsers().createUsersFromData(data);
  }

  #parseInput() {
    const parser = new inputParsers[this.parserType](
      this.fileConfig.input,
      this.parserOtions
    );

    return parser.readFromInput();
  }

  #validateUserData(users) {
    const validator = new Validator();

    users.forEach((user) => {
      const validation = validator.performValidation(user);

      if (validation.result) {
        this.#validUsers.push(user);
      } else {
        // eslint-disable-next-line no-param-reassign
        user.error = `Invalid ${validation.error}`;
        this.#invalidUsers.push(user);
      }
    });
  }

  async #writeOutput() {
    if (this.#validUsers.length) {
      const parserForValidFile = new outputParsers[this.parserType](
        this.fileConfig.output.validFilePath,
        this.parserOtions,
        headerForValidFile
      );
      await parserForValidFile.writeToOutput(this.#validUsers);
    }
    if (this.#invalidUsers.length) {
      const parserForInvalidFile = new outputParsers[this.parserType](
        this.fileConfig.output.invalidFilePath,
        this.parserOtions,
        headerForInValidFile
      );
      await parserForInvalidFile.writeToOutput(this.#validUsers);
    }

    return OUTPUT_FILES_CREATED_SUCCESSFULLY;
  }
}
