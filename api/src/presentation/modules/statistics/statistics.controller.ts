import { NextFunction, Request, Response } from "express";
import getStatistics from '@/application/statistics/queries/getEntityStatistics/get-entity-statistics.service'
import StatisticsRepository from '@/infrastructure/persistence/repositories/statistics.repository'

const get = {
  v2: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const statisticsRepository = new StatisticsRepository()
    const statisticsQuery = getStatistics(statisticsRepository)
    try {
      const response = await statisticsQuery(+req.params.parentType, +req.params.parentId)
      res.json(response)
    } catch(e) {
      return next(e)
    }
  }
}

export default {
  get
}
