import OrderDirectionEnum from "@/domain/enums/order-direction.enum"
import SellerSortfieldEnum from "@/domain/enums/seller-sortfield.enum"
import { badRequestError, internalServerError } from "@/presentation/docs/errors.doc"

const paginatedSellerItemResponse = {
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

const getPaginatedSellers = {
  tags: ['Sellers'],
  description: 'Retrieve all sellers',
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
        enum: Object.values(SellerSortfieldEnum)
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
      description: 'Sellers retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: paginatedSellerItemResponse,
            },
          },
        },
      },
    },
    '400': badRequestError,
    '500': internalServerError,
  },
}

export { getPaginatedSellers }
