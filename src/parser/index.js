import * as constants from '../constants/parser';
import inputCSVParser from './csv/input';
import outputCSVParser from './csv/output';

export const inputParsers = {
  [constants.csv]: inputCSVParser,
};

export const outputParsers = {
  [constants.csv]: outputCSVParser,
};
