import OrderDirectionEnum from "@/domain/enums/order-direction.enum"
import ArticleSortfieldEnum from "@/domain/enums/article-sortfield.enum"
import { badRequestError, internalServerError } from "@/presentation/apidoc/docs/errors.doc"

const paginatedArticleItemResponse = {
  id: {
    type: 'int',
    example: 1,
  },
  name: {
    type: 'string',
    example: 'LG',
  },
  rating: {
    type: 'int',
    example: '3',
  },
}

const getPaginatedArticles = {
  tags: ['Articles'],
  description: 'Retrieve all articles',
  operationId: 'get',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'pageIndex',
      in: 'query',
      description: 'Page number',
      required: false,
      type: 'int',
    },
    {
      name: 'pageSize',
      in: 'query',
      description: 'Items per page',
      required: false,
      type: 'int',
    },
    {
      name: 'sortfield',
      in: 'query',
      description: 'Property to be sorted by',
      required: false,
      type: 'string',
      schema: {
        type: 'string',
        enum: Object.values(ArticleSortfieldEnum)
      }
    },
    {
      name: 'orderDirection',
      in: 'query',
      description: 'Sort order',
      required: false,
      schema: {
        type: 'string',
        enum: Object.values(OrderDirectionEnum)
      }
    },
  ],
  responses: {
    '200': {
      description: 'Articles retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: paginatedArticleItemResponse,
            },
          },
        },
      },
    },
    '400': badRequestError,
    '500': internalServerError,
  },
}

export { getPaginatedArticles }
