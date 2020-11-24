import Processor from './processor';
import { csv } from './constants/parser';

function transformDataForCSV(fileConfig, delimiter) {
  const processor = new Processor(fileConfig, csv, {
    delimiter,
  });

  return processor.processInputAndCreateOutput();
}

export default function transformData(fileConfig) {
  return transformDataForCSV(fileConfig, ',');
}