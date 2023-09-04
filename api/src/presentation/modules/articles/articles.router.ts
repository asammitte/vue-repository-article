import articlesController from '@/presentation/modules/articles/articles.controller'
import express from 'express'
import paginatedArticlesRequest from '@/presentation/modules/articles/requests/get-paginated-articles.request'
import validateRequest from '@/presentation/middlewares/validate-request.middleware'
import versionMiddleware from '@/presentation/middlewares/api-version.middleware'

const router = express.Router({ mergeParams: true })

router.get('/', versionMiddleware(2), validateRequest(paginatedArticlesRequest), articlesController.getPaginated.v2)
router.get('/', validateRequest(paginatedArticlesRequest), articlesController.getPaginated.v1)

export default router
