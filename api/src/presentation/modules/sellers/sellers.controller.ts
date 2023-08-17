import { IGetPaginatedSellers } from '@/presentation/modules/sellers/dto/get-paginated-sellres.dto'
import { NextFunction, Request, Response } from "express";
import sellerCreateCommand from '@/application/sellers/commands/create-seller.service'
import sellerGetAllQuery from '@/application/sellers/queries/getPaginated/get-paginated-sellers.service'

const getAll = async (
  req: Request<IGetPaginatedSellers>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { pageIndex, pageSize, sortfield, orderDirection } = req.params

  const sellers = await sellerGetAllQuery(pageIndex, pageSize, sortfield, orderDirection)
  res.json(sellers)
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await sellerCreateCommand(req.body));
  } catch (err) {
    console.error(`Error while creating seller`)
    next(err)
  }
}

export default {
  getAll,
  create,
}
