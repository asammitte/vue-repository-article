import { IGetPaginatedAuthors } from '@/presentation/modules/authors/requests/get-paginated-authors.request'
import { NextFunction, Request, Response } from "express";
import AuthorsRepository from '@/infrastructure/persistence/repositories/authors.repository'
import getPaginatedAuthors from '@/application/authors/queries/getPaginated/get-paginated-authors.service'
import getAuthor from '@/application/authors/queries/getAuthor/get-author.service'

const getPaginated = {
  v1: async (
    req: Request<IGetPaginatedAuthors>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { pageIndex, pageSize, sortfield, orderDirection } = req.params
    const authorsRepository = new AuthorsRepository()
    const authorsQuery = getPaginatedAuthors(authorsRepository)
    const response = await authorsQuery(pageIndex, pageSize, sortfield, orderDirection)
    res.json(response)
  },

  v2: async (
    req: Request<IGetPaginatedAuthors>,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    // const { pageIndex, pageSize, sortfield, orderDirection } = req.params
    // const authorsQuery = getPaginatedAuthors({ getAll })
    // const response = await authorsQuery(pageIndex, pageSize, sortfield, orderDirection)
    res.json('second-version')
  }
}

const get = {
  v1: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    // const { pageIndex, pageSize, sortfield, orderDirection } = req.route.id
    const authorsRepository = new AuthorsRepository()
    const authorsQuery = getAuthor(authorsRepository)
    try {
      const response = await authorsQuery(+req.params.id)
      res.json(response)
    } catch(e) {
      return next(e)
    }
  }
}

export default {
  getPaginated,
  get
}
