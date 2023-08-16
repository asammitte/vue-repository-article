class BadRequestError {
  private _code: number;
  private _message: unknown;

  constructor(code: number, message: unknown) {
    this._message = message
    this._code = code
  }

  get code(): number {
    return this._code
  }

  get message(): unknown {
    return this._message
  }

  static badRequest(msg: unknown) {
    return new BadRequestError(400, msg)
  }
}

export default BadRequestError
