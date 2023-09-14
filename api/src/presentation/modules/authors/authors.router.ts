import authorsController from '@/presentation/modules/authors/authors.controller'
import express from 'express'
import paginatedAuthorsRequest from '@/presentation/modules/authors/requests/get-paginated-authors.request'
import validateRequest from '@/presentation/middlewares/validate-request.middleware'
import versionMiddleware from '@/presentation/middlewares/api-version.middleware'

const router = express.Router({ mergeParams: true })

router.get('/', versionMiddleware(2), validateRequest(paginatedAuthorsRequest), authorsController.getPaginated.v2)
router.get('/', validateRequest(paginatedAuthorsRequest), authorsController.getPaginated.v1)

router.get('/:id', authorsController.get.v2)
router.get('/:id', authorsController.get.v1)

export default router
