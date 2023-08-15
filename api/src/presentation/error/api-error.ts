class ApiError {
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
    return new ApiError(400, msg)
  }
}

export default ApiError
