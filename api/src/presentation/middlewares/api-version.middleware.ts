import { NextFunction, Request, Response } from 'express'

export const versionMiddleware = (version: number): any => {
  return async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    // removes the "v" and turns into a number
    let requestVersion = parseInt(req.params.version?.substring(1))

    if (typeof requestVersion !== 'number') {
      return next(new Error('Invalid API version requested.'))
    } else if (requestVersion >= version) {
      return next();
    }

    // skip to the next route
    return next('route')
  }
}

export default versionMiddleware
