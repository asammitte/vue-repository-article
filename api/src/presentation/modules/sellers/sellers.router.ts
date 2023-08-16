import express from 'express'
import sellersController from '@/presentation/modules/sellers/sellers.controller'
import validateDto from '@/presentation/middlewares/validate-dto.middleware'
import paginatedSellersDto from './dto/get-paginated-sellres.dto'

const router = express.Router();

router.get('/', validateDto(paginatedSellersDto), sellersController.getAll)

export default router
