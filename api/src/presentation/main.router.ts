import { Express, Router } from 'express'
import indexRouter from '@/presentation/index/index.router'
import sellersRouter from '@/presentation/sellers/sellers.router'

export const routes = (app: Express): void => {
  app.use('/', indexRouter)
  app.use('/sellers', sellersRouter)
}

export default routes
