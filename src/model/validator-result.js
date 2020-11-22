export default class ValidatorResult {
  constructor(result, error) {
    this.result = result;
    this.error = error || null;
  }
}
