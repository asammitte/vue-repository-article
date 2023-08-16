import BadRequestError from "@/presentation/errors/bad-request.error"
import { NextFunction, Request, Response } from "express"
import { AnySchema } from "yup"

export const validateDto = (schema: AnySchema): any => {
  return async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validateQuery = await schema.validate({
        body: req.body,
        params: req.params,
        query: req.query
      }, {
        abortEarly: false
      })
      req = validateQuery
      next()
    } catch (error) {
      next(BadRequestError.badRequest(error))
    }
  }
}

export default validateDto
