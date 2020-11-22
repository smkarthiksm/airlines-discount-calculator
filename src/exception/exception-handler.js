export default class ExceptionHandler extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, ExceptionHandler);
  }
}
