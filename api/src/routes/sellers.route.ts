import express from 'express'
import sellersController from '@/controllers/sellers.controller'

const router = express.Router();

/* GET programming languages. */
router.get('/', sellersController.get)
  
/* POST programming language */
router.post('/', sellersController.create)

/* PUT programming language */
// router.put('/:id', programmingLanguagesController.update)

/* DELETE programming language */
// router.delete('/:id', programmingLanguagesController.remove)

export default router
