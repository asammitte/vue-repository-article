import { apiDocumentation } from '@/presentation/docs/api.doc'
import { Express } from 'express'
import indexRouter from '@/presentation/modules/index/index.router'
import sellersRouter from '@/presentation/modules/sellers/sellers.router'
import swaggerUi from 'swagger-ui-express'

export const routes = (app: Express): void => {
  app.use('/', indexRouter)
  app.use('/sellers', sellersRouter)
  app.use('/apidoc', swaggerUi.serve, swaggerUi.setup(apiDocumentation))
}

export default routes
