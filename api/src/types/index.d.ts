import { Express } from 'express'

declare module "express" {
  interface ValidatedRequest<T> extends Request {
    validatedData: T;
  }
}
