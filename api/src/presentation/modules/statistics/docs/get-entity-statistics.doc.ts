import { badRequestError, internalServerError } from "@/presentation/apidoc/docs/errors.doc"
import StatisticTypeEnum from "@/domain/enums/statistic-type.enum"

const entityStatisticsResponse = {
  type: 'object',
  properties: {
    rating: {
      type: 'int',
    }
  },
  example: {
    "rating": 412
  }
}

const getEntityStatistics = {
  tags: ['Statistics'],
  description: 'Retrieve statistics for entity(Authors, Articles)',
  operationId: 'get',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'parentType',
      in: 'path',
      description: 'Entity type:',
      required: true,
      type: 'string',
      schema: {
        type: 'string',
        enum: Object.values(StatisticTypeEnum)
      }
    },
    {
      name: 'parentId',
      in: 'path',
      description: 'Entity id',
      required: true,
      type: 'string'
    },
  ],
  responses: {
    '200': {
      description: 'Statistics retrieved successfully!',
      content: {
        'application/json': {
          schema: entityStatisticsResponse,
        },
      },
    },
    '400': badRequestError,
    '500': internalServerError,
  },
}

export { getEntityStatistics }
