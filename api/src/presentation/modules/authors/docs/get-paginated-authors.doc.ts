import OrderDirectionEnum from "@/domain/enums/order-direction.enum"
import AuthorSortfieldEnum from "@/domain/enums/author-sortfield.enum"
import { badRequestError, internalServerError } from "@/presentation/apidoc/docs/errors.doc"

const paginatedAuthorItemResponse = {
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

const getPaginatedAuthors = {
  tags: ['Authors'],
  description: 'Retrieve all authors',
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
        enum: Object.values(AuthorSortfieldEnum)
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
      description: 'Authors retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: paginatedAuthorItemResponse,
            },
          },
        },
      },
    },
    '400': badRequestError,
    '500': internalServerError,
  },
}

export { getPaginatedAuthors }
