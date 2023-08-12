import sellerCreateCommand from '@/services/sellers/commands/createSeller.service'
import sellerGetAllQuery from '@/services/sellers/queries/getPaginatedSellers.service'

import { NextFunction, Request, Response } from "express";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
      res.json(await sellerGetAllQuery())
  } catch (err) {
      console.error(`Error while getting sellers`);
      next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await sellerCreateCommand(req.body));
    // console.log(req.body)
    // res.json('create seller endpoint')
  } catch (err) {
    console.error(`Error while creating programming language`)
    next(err)
  }
}

// async function update(req, res, next) {
//   try {
//     res.json(await programmingLanguages.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating programming language`, err.message);
//     next(err);
//   }
// }

// async function remove(req, res, next) {
//   try {
//     res.json(await programmingLanguages.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting programming language`, err.message);
//     next(err);
//   }
// }

export default {
  get,
  create,
  // update,
  // remove
}
