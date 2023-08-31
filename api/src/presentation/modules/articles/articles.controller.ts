import { IGetPaginatedArticles } from '@/presentation/modules/articles/requests/get-paginated-articles.request'
import { NextFunction, Request, Response } from "express";
import { getAll } from '@/infrastructure/persistence/repositories/articles.repository'
import articleCreateCommand from '@/application/articles/commands/create-article.service'
import getPaginatedArticles from '@/application/articles/queries/getPaginated/get-paginated-articles.service'

const getPaginated = async (
  req: Request<IGetPaginatedArticles>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { pageIndex, pageSize, sortfield, orderDirection } = req.params
  const articlesQuery = getPaginatedArticles({ getAll })
  const response = await articlesQuery(pageIndex, pageSize, sortfield, orderDirection)
  res.json(response)
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await articleCreateCommand(req.body));
  } catch (err) {
    console.error(`Error while creating article`)
    next(err)
  }
}

export default {
  getPaginated,
  create,
}
