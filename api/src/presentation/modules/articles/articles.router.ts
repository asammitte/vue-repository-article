import express from 'express'
import articlesController from '@/presentation/modules/articles/articles.controller'
import validateDto from '@/presentation/middlewares/validate-dto.middleware'
import paginatedArticlesDto from './dto/get-paginated-articles.dto'

const router = express.Router();

router.get('/', validateDto(paginatedArticlesDto), articlesController.getAll)

export default router
