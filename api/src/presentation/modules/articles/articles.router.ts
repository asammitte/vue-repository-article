import express from 'express'
import articlesController from '@/presentation/modules/articles/articles.controller'
import validateRequest from '@/presentation/middlewares/validate-request.middleware'
import versionMiddleware from '@/presentation/middlewares/api-version.middleware'
import paginatedArticlesRequest from './requests/get-paginated-articles.request'

const router = express.Router({ mergeParams: true })

router.get('/', versionMiddleware(2), validateRequest(paginatedArticlesRequest), articlesController.getPaginated.v2)
router.get('/', validateRequest(paginatedArticlesRequest), articlesController.getPaginated.v1)

export default router
