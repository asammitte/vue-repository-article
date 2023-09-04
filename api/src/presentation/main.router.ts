import { Express } from 'express'
import articlesRouter from '@/presentation/modules/articles/articles.router'
import indexRouter from '@/presentation/modules/index/index.router'
import swaggerRouter from '@/presentation/apidoc/swagger.router'

export const routes = (app: Express): void => {
  app.use('/', indexRouter)
  app.use('/apidoc', swaggerRouter)
  app.use('/:version/articles', articlesRouter)
}

export default routes
