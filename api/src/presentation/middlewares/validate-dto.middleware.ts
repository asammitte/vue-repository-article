import ApiError from "@/presentation/error/api-error"
import { NextFunction, Request, Response } from "express"
import { AnySchema } from "yup"

export const validateDto = (schema: AnySchema): any => {
  return async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const validateQuery = await schema.validate({
        body: req.body,
        params: req.params,
        query: req.query
      })
      req = validateQuery
      next()
    } catch (error) {
      // console.log(error)
      // res.status(400).json(error)
      next(ApiError.badRequest(error))
    }
  }
}

export default validateDto
