import { Express } from 'express'
import articlesRouter from '@/presentation/modules/articles/articles.router'
import authorsRouter from '@/presentation/modules/authors/authors.router'
import indexRouter from '@/presentation/modules/index/index.router'
import statisticsRouter from '@/presentation/modules/statistics/statistics.router'
import swaggerRouter from '@/presentation/apidoc/swagger.router'

export const routes = (app: Express): void => {
  app.use('/', indexRouter)
  app.use('/apidoc', swaggerRouter)
  app.use('/:version/articles', articlesRouter)
  app.use('/:version/authors', authorsRouter)
  app.use('/:version/statistics', statisticsRouter)
}

export default routes
