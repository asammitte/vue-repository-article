import express from 'express'
import sellersController from '@/presentation/modules/sellers/sellers.controller'
import validateDto from '@/presentation/middlewares/validate-dto.middleware'
import paginatedSellersDto from './dto/get-paginated-sellres.dto'

const router = express.Router();

/* GET programming languages. */
router.get('/', validateDto(paginatedSellersDto), sellersController.getAll)

/* POST programming language */
// router.post('/', sellersController.create)

/* PUT programming language */
// router.put('/:id', programmingLanguagesController.update)

/* DELETE programming language */
// router.delete('/:id', programmingLanguagesController.remove)

export default router
