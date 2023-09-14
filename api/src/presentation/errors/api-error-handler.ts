import { Request, Response, NextFunction } from 'express'
import BadRequestError from '@/presentation/errors/bad-request.error'
import NotFoundError from '@/application/exceptions/not-found.error'

const apiErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof BadRequestError) {
    return res.status(error.code).json(error.message)
  }

  if (error instanceof NotFoundError) {
    return res.status(error.code).json(error.message)
  }

  return res.status(500).json('Smth went wrong =)')
}

export default apiErrorHandler
