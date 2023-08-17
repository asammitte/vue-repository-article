// import { Express } from 'express'

// declare module "express" {
//   interface Request {
//     getValidatedData: <T>() => T;
//   }
// }

interface ValidatedData<T> {
  data: T
}
