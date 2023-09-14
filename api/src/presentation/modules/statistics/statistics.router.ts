import statisticsController from '@/presentation/modules/statistics/statistics.controller'
import express from 'express'

const router = express.Router({ mergeParams: true })

router.get('/:parentType/:parentId', statisticsController.get.v2)

export default router
