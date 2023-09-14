class NotFoundError {
  private readonly _code = 404
  private _message: unknown

  constructor(message: unknown) {
    this._message = message
  }

  get code(): number {
    return this._code
  }

  get message(): unknown {
    return this._message
  }
}

export default NotFoundError
