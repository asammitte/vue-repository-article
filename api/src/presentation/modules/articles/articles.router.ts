import express from 'express'
import articlesController from '@/presentation/modules/articles/articles.controller'
import validateRequest from '@/presentation/middlewares/validate-request.middleware'
import paginatedArticlesRequest from './requests/get-paginated-articles.request'

const router = express.Router();

router.get('/', validateRequest(paginatedArticlesRequest), articlesController.getAll)

export default router
