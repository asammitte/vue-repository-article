import { apiDocumentationV1 } from '@/presentation/apidoc/docs/api-v1.doc'
import { apiDocumentationV2 } from '@/presentation/apidoc/docs/api-v2.doc'
import express from 'express'
import swaggerUi from 'swagger-ui-express'

const router = express.Router()

router.use('/v1', swaggerUi.serveFiles(apiDocumentationV1), swaggerUi.setup(apiDocumentationV1))
router.use('/v2', swaggerUi.serveFiles(apiDocumentationV2), swaggerUi.setup(apiDocumentationV2))

export default router
