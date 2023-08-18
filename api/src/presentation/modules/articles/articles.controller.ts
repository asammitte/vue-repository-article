import { IGetPaginatedArticles } from '@/presentation/modules/articles/dto/get-paginated-articles.dto'
import { NextFunction, Request, Response } from "express";
import articleCreateCommand from '@/application/articles/commands/create-article.service'
import articleGetAllQuery from '@/application/articles/queries/getPaginated/get-paginated-articles.service'

const getAll = async (
  req: Request<IGetPaginatedArticles>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { pageIndex, pageSize, sortfield, orderDirection } = req.params

  const articles = await articleGetAllQuery(pageIndex, pageSize, sortfield, orderDirection)
  res.json(articles)
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
  getAll,
  create,
}
