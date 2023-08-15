import { Request, Response, NextFunction } from 'express'
import ApiError from '@/presentation/error/api-error'

const apiErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ApiError) {
    return res.status(error.code).json(error.message)
  }

  return res.status(500).json('Smth went wrong =)')
}

export default apiErrorHandler
