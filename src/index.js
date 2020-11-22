import Processor from './processor';
import { csv } from './constants/parser';

// const outputPath1 = '';
async function parseCSVFile(fileConfig, delimiter) {
  // eslint-disable-next-line no-useless-catch
  try {
    const processor = new Processor(fileConfig, csv, {
      delimiter,
    });

    const result = await processor.processInputAndCreateOutput();

    return result;
  } catch (err) {
    throw err;
  }
}

export async function parseFile(fileConfig) {
  return parseCSVFile(fileConfig, ',');
}

parseFile({
  input: '/Users/karthiksm/Documents/github/airlines-discount-service/sample-files/input/customer-data-one.csv',
  output: {
    validFilePath: '/Users/karthiksm/Documents/github/airlines-discount-service/sample-files/output/valid-users.csv',
    invalidFilePath: '/Users/karthiksm/Documents/github/airlines-discount-service/sample-files/output/invalid-users.csv',
  },
});
